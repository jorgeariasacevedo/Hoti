import React from "react";
/*Esto dice que error ocurrio tras la validación*/
export default function MessageBox(props) {
  return (
    <div className={`alert alert-${props.variant || "info"}`}>
      {props.children}
    </div>
  );
}
