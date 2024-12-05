import React, { useState, useEffect } from "react";

const LifecycleComponent = () => {
  useEffect(() => {
    console.log("Component Mounted");

   
    return () => {
      console.log("Component Unmounted");
    };
  }, []); 

  return <div>LifecycleComponent is active</div>;
};

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide Component" : "Show Component"}
      </button>
      {isVisible && <LifecycleComponent />}
    </div>
  );
};

export default App;
