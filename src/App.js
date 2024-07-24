import './App.css';
import { useState } from 'react';

function App() {

  const [background, setBackground] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fullName, setFullName] = useState ({
    fName: "",
    lName: ""
  });

  function handleMouseOver () {
    setBackground(true);
  }

  function handleMouseOut () {
    setBackground(false);
  }

  function handleChange (e) {
    const {name, value} = e.target;

    setFullName((prevValue) => {
      if (name === "fName" ) {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  }

  function handleClick (e) {
    setIsSubmitted(true);
    e.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {isSubmitted && fullName.fName + " " + fullName.lName + ", your form is submitted"}</h1>

      <form onSubmit={handleClick}>
        <input 
          name="fName"
          onChange={handleChange}
          type="text" 
          placeholder="First Name"
          value={fullName.fName}
        />

        <input 
          name="lName"
          onChange={handleChange}
          type="text" 
          placeholder="Last Name"
          value={fullName.lName}
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
