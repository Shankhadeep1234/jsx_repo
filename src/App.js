import React from "react";

function App() {
  let message = "Hi There";
  if (Math.random() > 0.5) {
    message = "I am from Random";
  }
  return <div>{message}</div>;
}

export default App;
