import { useState } from "react";
import "./App.css";
import Navbar from "./Components/01-Navbar";
import TextForm from "./Components/02-TextForm";
import Alert from "./Components/03-Alert";

function App() {
  // Enable Dark Mode And Light Mode
  const [mode, setMode] = useState("light"); //Whther dark mode is enabled or not

  function App() {
    // Enable Dark Mode And Light Mode
    const [mode, setMode] = useState("light"); // Whether dark is enabled or not
    const toggleMode = () => {
      if (mode === "light") {
        setMode("dark");
        document.body.style.backgroundColor = "#05213c";
        showAlert("Dark mode has been enbled", "success");
      } else {
        setMode("light");
        document.body.style.backgroundColor = "white";
        showAlert("Light mode has been enbled", "success");
      }
    };
    // Enable Alert's
    const [alert, setAlert] = useState(null);
    const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type,
      });
      setTimeout(() => {
        setAlert(null);
      }, 1500);
    };
  }
  return (
    <div>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-4">
        <TextForm
          heading="Enter your text to analyze "
          mode={mode}
          showAlert={showAlert}
        />
      </div>
    </div>
  );
}

export default App;
