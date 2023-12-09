
import React, { useState, useEffect } from "react";


function Teste() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://lrorl0tokj.execute-api.us-east-1.amazonaws.com/dev/transactions")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <h1>{data.message}</h1>
    </div>
  );
}

export default Teste