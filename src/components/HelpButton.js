import React from "react";
import helpIcon from "./help-button.png";

function HelpButton(props) {
  const handleClick = () => {
    // Perform some action here when the button is clicked
    console.log("Button clicked!");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}
    >
      <button
        style={{
          fontSize: "24px",
          padding: "200px",
          backgroundImage: `url(${helpIcon})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          color: "red",
          border: "none",
          cursor: "pointer"
        }}
        onClick={handleClick}
      >
        {props.children}
      </button>
    </div>
  );
}

export default HelpButton;
