import React from "react";
import { useState } from "react";
import axios from "axios"; 
import { useEffect } from "react";

const App = () => {
  const [joke, setJoke] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/signup")
      .then((response) => {
        setCount(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

  return (
    <div>
      <h1>HELLO WORLD!</h1>
    </div>
  );
};

export default App;
