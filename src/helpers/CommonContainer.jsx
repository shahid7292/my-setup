import React from "react";

function CommonContainer(props) {
  return (
    <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
      {props.children}
    </div>
  );
}

export default CommonContainer;
