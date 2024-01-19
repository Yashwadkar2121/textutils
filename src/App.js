import "./App.css";
import Navbar from "./Components/01-Navbar";
import TextForm from "./Components/02-TextForm";
import React, { useState } from "react";

function App() {
  // Enable Dark Mode And Light Mode
  const [mode, setMode] = useState("light"); // Whether dark is enabled or not
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#05213c";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <div>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-4">
        <TextForm heading="Enter your text to analyze " mode={mode} />
      </div>
    </div>
  );
}

export default App;
