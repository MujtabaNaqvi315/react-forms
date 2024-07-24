import './App.css';
import { useState } from 'react';

function App() {

  const [background, setBackground] = useState(false);
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleMouseOver () {
    setBackground(true);
  }

  function handleMouseOut () {
    setBackground(false);
  }

  function handleChange (e) {
    setName(e.target.value);
  }

  function handleClick () {
    setIsSubmitted(true);
  }

  return (
    <div className="container">
      <h1>Hello {name} {isSubmitted && "your form is submitted"}</h1>

      <input 
        onChange={handleChange}
        type="text" 
        placeholder="What's your name?"
        value={name}
      />

      <button 
        style={{backgroundColor: background ? "black" : "white"}} 
        onMouseOver={handleMouseOver} 
        onMouseOut={handleMouseOut}
        onClick={handleClick}> 
          Submit 
      </button>

    </div>
  );
}

export default App;
