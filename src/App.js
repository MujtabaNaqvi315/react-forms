import './App.css';
import { useState } from 'react';

function App() {

  const [background, setBackground] = useState(false);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleMouseOver () {
    setBackground(true);
  }

  function handleMouseOut () {
    setBackground(false);
  }

  function handleChangeFname (e) {
    setFname(e.target.value);
  }

  function handleChangeLname (e) {
    setLname(e.target.value);
  }

  function handleClick (e) {
    setIsSubmitted(true);
    e.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {isSubmitted && fname + " " + lname + ", your form is submitted"}</h1>

      <form onSubmit={handleClick}>
        <input 
          onChange={handleChangeFname}
          type="text" 
          placeholder="First Name"
          value={fname}
        />

        <input 
          onChange={handleChangeLname}
          type="text" 
          placeholder="Last Name"
          value={lname}
        />

        <button
          type="submit" 
          style={{backgroundColor: background ? "black" : "white"}} 
          onMouseOver={handleMouseOver} 
          onMouseOut={handleMouseOut}> 
            Submit 
        </button>
      </form>

    </div>
  );
}

export default App;
