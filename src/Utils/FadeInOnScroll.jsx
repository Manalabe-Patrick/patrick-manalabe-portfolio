import React, { useState, useEffect } from "react";

const FadeInOnScroll = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      });
    });
    observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={domRef} className={`fade-in ${isVisible ? "visible" : ""}`}>
      {children}
    </div>
  );
};

export default FadeInOnScroll;
