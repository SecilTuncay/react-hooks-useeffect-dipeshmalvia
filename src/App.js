import { useState } from "react";
import "./App.css";
import CComponent from "./components/CComponent/CComponent";
import FComponent from "./components/FComponent/FComponent";

function App() {
  const [flag, setFlag] = useState(true);
  return (
    <div className="App">
      <div>
        <button onClick={() => setFlag(!flag)}>Toggle Class Component</button>
      </div>
      {flag ? <CComponent /> : <FComponent />}
    </div>
  );
}

export default App;
