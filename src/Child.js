import React, { useEffect, forwardRef } from "react";

const Child = React.memo(
  forwardRef(function Child({ data, changeData }, ref) {
    useEffect(() => {
      changeData();
    }, []);
    console.log("child re-rendered");
    return (
      <label>
        {data.name}
        <input ref={ref} />
      </label>
    );
  }),
  compareProps
);
function compareProps(oldProps, newProps) {
  console.log("comparing props...");
  const value =
    oldProps.name === newProps.name && oldProps.age === newProps.age;
  console.log("value", value);
  //   setTimeout(() => {}, 2000);
  return value;
}
export default Child;
// import React, { useEffect, forwardRef } from "react";

// const Child = forwardRef(function Child({ data, changeData }, ref) {
//   useEffect(() => {
//     changeData();
//   }, []);
//   console.log("child re-rendered");
//   return (
//     <label>
//       {data.name}
//       <input ref={ref} />
//     </label>
//   );
// });
// function compareProps(oldProps, newProps) {
//   console.log("comparing props...");
//   const value =
//     oldProps.name === newProps.name && oldProps.age === newProps.age;
//   console.log("value", value);
//   //   setTimeout(() => {}, 2000);
//   return value;
// }
// export default Child;
