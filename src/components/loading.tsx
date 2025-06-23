import React, { useEffect, useState } from "react";

export const Loading = () => {
  const [dots, setDots] = useState<string>("");

  useEffect(() => {
    const interVal = setInterval(() => {
      if (dots.length > 4) {
        setDots("");
      } else {
        setDots(dots + ".");
      }
    }, 300);
    return () => {
      clearInterval(interVal);
    };
  }, [dots]);

  return <div>👨🏻‍💻 Loading{dots}</div>;
};
