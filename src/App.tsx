import { Home } from "Components/Home";
import { Navbar } from "Components/Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>Web3-React V8</h1>
      <Home />
    </div>
  );
}

export default App;
