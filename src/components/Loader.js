import React from "react";
import '../App.css'

export default function Loader() {
  return (
    <div style={{display: "flex",justifyContent: 'center', margin: '20px 0'}}>
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
