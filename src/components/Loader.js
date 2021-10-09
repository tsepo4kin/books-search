import React from "react";
import './Loader.css';

export default function Loader() {
  return (
    <div style={{display: "flex",justifyContent: 'center'}}>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
