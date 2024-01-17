import React from "react";

const Child2 = React.memo(function ({ data }) {
  console.log("child2");
  return <div>{data.name}</div>;
});

export default Child2;
