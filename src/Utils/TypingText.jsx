import React, { useState, useEffect } from "react";

const TypingText = ({ text, className }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setDisplayText((prevText) => prevText + text[currentIndex]);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 100);

    if (currentIndex === text.length) {
      clearInterval(typingInterval);
    }

    return () => clearInterval(typingInterval);
  }, [currentIndex, text]);

  return <h1 className={className}>{displayText}</h1>;
};

export default TypingText;
