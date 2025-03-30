import { useEffect, useState } from "react";

export default function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="z-20 fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none shadow-lg transition-all duration-150 ease-out"
      style={{
        transform: `translate(${position.x - 8}px, ${position.y - 8}px)`,
      }}
    />
  );
}
