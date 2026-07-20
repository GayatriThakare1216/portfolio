import { useEffect, useState } from "react";

function CursorGlow() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });


  useEffect(() => {

    const moveCursor = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

    };


    window.addEventListener(
      "mousemove",
      moveCursor
    );


    return () => {

      window.removeEventListener(
        "mousemove",
        moveCursor
      );

    };


  }, []);



  return (

    <>

      {/* Big Glow */}

      <div

        className="
        fixed
        pointer-events-none
        z-[999]
        w-48
        h-48
        rounded-full
        bg-blue-500/20
        blur-3xl
        transition-transform
        duration-500
        ease-out
        "

        style={{
          transform:
          `translate(${position.x - 96}px, ${position.y - 96}px)`
        }}

      />



      {/* Small Cursor */}

      <div

        className="
        fixed
        pointer-events-none
        z-[1000]
        w-5
        h-5
        rounded-full
        bg-blue-500
        shadow-[0_0_20px_#3b82f6]
        transition-transform
        duration-150
        ease-out
        "

        style={{
          transform:
          `translate(${position.x - 10}px, ${position.y - 10}px)`
        }}

      />


    </>

  );
}

export default CursorGlow;