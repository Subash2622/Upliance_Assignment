import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Button, Container } from "@mui/material";

const Counter = () => {
  // State for the count
  const [count, setCount] = useState(0);

  // State for the background color animation
  const [bgColor, setBgColor] = useState("#FFFFFF");

  // React Spring animation for background color
  const bgColorAnimation = useSpring({
    backgroundColor: bgColor,
  });

  // Function to handle incrementing the count
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
    setBgColor(`rgb(${count + 10}, ${count + 20}, ${count + 30})`);
  };

  // Function to handle decrementing the count
  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
    setBgColor(`rgb(${count + 10}, ${count + 20}, ${count + 30})`);
  };

  // Function to handle resetting the count
  const resetCount = () => {
    setCount(0);
    setBgColor("#FFFFFF");
  };

  return (
    <Container maxWidth="sm">
      <animated.div
        className="counter"
        style={{
          ...bgColorAnimation,
          padding: "20px",
          borderRadius: "8px",
          textAlign: "center",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          color: "white", // Set text color to white
        }}
      >
        <h2 style={{ color: "green" }}>Count: {count}</h2>
        <Button
          variant="contained"
          onClick={incrementCount}
          style={{ marginRight: "10px" }}
        >
          Increment
        </Button>
        <Button
          variant="contained"
          onClick={decrementCount}
          style={{ marginRight: "10px" }}
        >
          Decrement
        </Button>
        <Button variant="contained" onClick={resetCount}>
          Reset
        </Button>
      </animated.div>
    </Container>
  );
};

export default Counter;
