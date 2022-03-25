import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
   setSubmitting(true);

   setTimeout(() => {
     setSubmitting(false);
   }, 10000)
 }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Test react app</h1>
        <h2>This is a dummy app for testing only</h2>
        {submitting &&
       <div>Submtting Form...</div>
     }
        <form onSubmit={handleSubmit}>
        <fieldset>
         <label>
           <p>Please enter your name</p>
           <input name="name" data-test="name-input" />
         </label>
         <label>
            <p>Please enter your age</p>
            <input name="age" data-test="age-input"/>
         </label>
       </fieldset>
       <button style={{cursor: "pointer"}} data-test="submitBtn" type="submit">Submit</button>
       </form>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
