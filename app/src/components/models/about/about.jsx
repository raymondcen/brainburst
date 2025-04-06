import React, { useState, useEffect } from "react";

export const About = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Doomscrolling", "Brainrot"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100 - Math.random() * 80); // faster typing
  const period = 5000;

  // Typing effect
  useEffect(() => {
    const ticker = setTimeout(() => {
      tick();
    }, delta);

    return () => clearTimeout(ticker);
  }, [text]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(30);
    } else {
      setDelta(50);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(prevLoopNum => prevLoopNum + 1);
      setDelta(500);
    }
  };

  return (
    <div className="flex flex-col items-center justify-around w-[50%] m-[20px]">
        <img src="./src/assets/logo.png" alt="BrainBurst Logo" className="w-60 h-60"/>
      
      <div className="text-[30px] text-white font-semibold text-center">
  <div className="mb-4">
    Say goodbye to <span className="text-pink-400">{text}</span>
  </div>
  <div>
   AND{" "}
    <div className="mt-4">
      Hello to learning that keeps you engaged and growing!
    </div>
  </div>
</div>
    </div>
  );
};


