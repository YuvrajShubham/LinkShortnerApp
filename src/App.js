import './App.css';
import LinkResult from './Components/LinkResult';
import LinkShortner from './Components/LinkShortner';
import { useState } from 'react';
import Background from './Components/Background';

function App() {
  const [inputValue, setInputValue] = useState("")
  return (
    <div className="App">
      <h1>Link Shortner App</h1>
      <Background />
      <LinkShortner setInputValue={setInputValue} />
      <LinkResult inputValue={inputValue} />
    </div>
  );
}

export default App;
