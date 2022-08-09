import React from "react";

function App() {
  let inputType = "number";
  let maxValue = 5;
  return <input type={inputType} max={maxValue} style={{ color: "red" }} />;
}

export default App;
