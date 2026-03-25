import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      const hideTimer = setTimeout(() => {
        setShouldRender(false);
      }, 500); // Wait for fade-out animation
      return () => clearTimeout(hideTimer);
    }, 1500); // Show for at least 1.5s for "construction style" impact

    return () => clearTimeout(timer);
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-9999 flex items-center justify-center bg-[#73C7E7] transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="flex gap-1.5 h-12">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-full bg-white animate-loader"
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>
    </div>
  );
};

export default Preloader;
