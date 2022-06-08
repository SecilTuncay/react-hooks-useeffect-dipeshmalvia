import React, { useState, useEffect } from "react";

function FComponent() {
  const [time, setTime] = useState(new Date().toString());
  const [message, setMessage] = useState("Functional Component");

  useEffect(() => {
    console.log("component mounted or updated");
    const interval = setInterval(showDate(), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const showDate = () => {
    setTime(new Date().toString());
  };
  return (
    <div>
      <div>{time}</div>
      <button onClick={showDate}>Show Date</button>
      <div>{message}</div>
      <button onClick={() => setMessage("Changed Functional Component!")}>Change Message </button>
    </div>
  );
}

export default FComponent;
