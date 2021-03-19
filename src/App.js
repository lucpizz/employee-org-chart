import "./App.css";
import { Home } from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Home name="Justin" />
      <About />
    </div>
  );
}

export default App;
