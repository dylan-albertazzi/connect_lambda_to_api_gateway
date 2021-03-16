import logo from './logo.svg';
import './App.css';
import { API } from "aws-amplify";
import React, { useState, useEffect } from "react";

function App() {
    const [message, setMessage] = useState('')
    useEffect(() => {
     // Call the API. The syntax: API.**HTTP method**.(**API name**, **api path**)
      API.get("gfrAPI", "/items")
        .then((response) => {
          // Add your code here
          console.log("==response:", response);
          
          setMessage(response)
        })
        .catch((error) => {
          console.log("==There was and error:", error);
        });
  }, []);
   
  
  //EXAMPLE OF SENDING DATA INTO LAMBDA
  // const myInit = {
  //     body: {
  //       formRes: {
  //         cuizine: 'Tacos',
  //         valueMostArr: [2,12,43],
          
  //       },
  //     }, // replace this with attributes you need
  //     headers: {}, // OPTIONAL
  //   };
  //  API.post("gfrAPI", "/items", myInit)
  //     .then((response) => {
  //       // Add your code here
  //       console.log("==response:", response);
  //       console.log("==response body:", response.body[0]);
  //     })
  //     .catch((error) => {
  //       console.log("==There was and error:", error);
  //     });
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The message from my lambda is:
        </p>
        <h4>{message}</h4>
      </header>
    </div>
  );
}

export default App;
