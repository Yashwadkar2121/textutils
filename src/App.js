import "./App.css";
import Navbar from "./Components/01-Navbar";
import TextForm from "./Components/02-TextForm";

function App() {
  return (
    <div>
      <Navbar title="TextUtils" />
      <div className="container my-4">
        <TextForm heading="Enter your text to analyze " />
      </div>
    </div>
  );
}

export default App;
