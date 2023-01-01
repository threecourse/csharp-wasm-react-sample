import { FC } from 'react';
import './App.css';
import {greeting} from "./wasm";

console.dir(import.meta.env);

const App: FC = () => {

  return (
    <div className="App">
      <h2>.NET 7 WebAssembly Sample</h2>
      <h2>{greeting(10, 0.2, "文字列", true)}</h2>
    </div>
  );
};

export default App;
