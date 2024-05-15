import React from "react";
import style from "./Notfound.module.css";
export default function Notfound() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img src="./notfound.jpg" alt="notfound" />
    </div>
  );
}
