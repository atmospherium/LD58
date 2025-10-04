import { useEffect, useState } from "react";
import "./RollingText.css";

type RollingTextProps = {
  words: Array<string>;
  duration?: number;
  delay?: number;
  easing?: string;
  loop?: boolean;
};

export const RollingText = ({ words, duration }: RollingTextProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const wordLength = words.length;

  useEffect(() => {
    setTimeout(() => {
      setActiveIndex((val) => (val + 1) % wordLength);
    }, duration);
  }, [activeIndex]);
  return (
    <div className="rolling-text-container">
      {words.map((word, index) => {
        return (
          <div
            key={index}
            className={`rolling-text-entry ${index === activeIndex ? "active" : "inactive"}`}
          >
            {word}
          </div>
        );
      })}
    </div>
  );
};
