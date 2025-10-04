import { useState } from "react";
import "./App.css";

import { story } from "./story";
import { SlotTextWords } from "@basatmaqsood/react-slot";
import { RollingText } from "./utils/RollingText";
import { RunScene } from "./RunScene";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Victors</h1>
      <RunScene scene={story} />
    </>
  );
}

export default App;
