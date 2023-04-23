import React, { useState, useEffect, useRef } from 'react';
import image1 from './duck1.JPEG';
import image2 from './duck2.jpg';
import image3 from './duckeyes1.jpg';
import image4 from './duckeyes2.jpg';

function SpecialButton() {
  const [toggle, setToggle] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [message, setMessage] = useState("Click and hold to call emergency contact");
  const [imageIndex, setImageIndex] = useState(0);
  const [countdown, setCountdown] = useState(null);
  const [toggleImage, setToggleImage] = useState(false); // new state variable

  const imageRefs = [useRef(), useRef()];
  const timerRef = useRef(null);

  const handleMouseDown = () => {
    setToggle(true);
    setStartTime(new Date());
    setCountdown(10);
    timerRef.current = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % 2);
      setCountdown((prevCountdown) => prevCountdown - 0.25);
    }, 250);
    imageRefs[0].current.src = image1;
    imageRefs[1].current.src = image2;
  };

  const handleMouseUp = () => {
    setTimeout(() => clearInterval(timerRef.current), 0);
    setToggle(false);
    setEndTime(new Date());
    setImageIndex(0);
    setMessage("Click and hold to call emergency contact");
    setCountdown(null);
    setToggleImage(false); // reset toggleImage to false
  };

  useEffect(() => {
    if (toggle) {
      imageRefs[imageIndex].current.style.display = "block";
      imageRefs[(imageIndex + 1) % 2].current.style.display = "none";
    }
  }, [imageIndex, toggle]);

  useEffect(() => {
    if (endTime && startTime) {
      if (endTime - startTime >= 10000) {
        console.log("call.emergency");
      }
    }
  }, [endTime, startTime]);

  useEffect(() => {
    if (countdown !== null && countdown <= 0) {
        clearInterval(timerRef.current);
        setMessage("Calling emergency contact...");
    } else if (countdown !== null) {
      setMessage(`Keep holding to call emergency contact (${countdown.toFixed(1)}s)`);
      if (countdown <= 3 && !toggleImage) {
        // set toggleImage to true and update image refs
        setToggleImage(true);
        imageRefs[0].current.src = image3;
        imageRefs[1].current.src = image4;
      }
    }
  }, [countdown, toggleImage]);

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      style={{
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <img ref={imageRefs[0]} src={image1} alt="Toggle Image" />
      <img ref={imageRefs[1]} src={image2} alt="Toggle Image" style={{ display: "none" }} />
      <p>{message}</p>
    </div>
  );
}

export default SpecialButton;
