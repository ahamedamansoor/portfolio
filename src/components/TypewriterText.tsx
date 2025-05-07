import React from 'react';
import Typewriter from 'typewriter-effect';

interface TypewriterTextProps {
  texts: string[];
  loop?: boolean;
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetween?: number;
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  texts,
  loop = true,
  typeSpeed = 80,
  deleteSpeed = 40,
  delayBetween = 2000,
  className = ''
}) => {
  return (
    <div className={`font-medium ${className}`}>
      <Typewriter
        options={{
          strings: texts,
          autoStart: true,
          loop: loop,
          deleteSpeed: deleteSpeed,
          delay: typeSpeed,
          pauseFor: delayBetween,
          wrapperClassName: 'inline',
          cursorClassName: 'text-indigo-600'
        }}
      />
    </div>
  );
};

export default TypewriterText;