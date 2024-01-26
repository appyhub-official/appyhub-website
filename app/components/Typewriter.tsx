'use client'

import { useState, useEffect } from 'react';

type Props = {
    textArray: string[],
    delay: number,
    duration: number,
    infinite: boolean
}

const Typewriter = ({
    textArray,
    delay,
    duration,
    infinite
}: Props) => {
  const [currentText, setCurrentText] = useState('\u00A0'),
    [currentIndex, setCurrentIndex] = useState(0),
    [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (currentIndex < textArray[textIndex].length) {
      timeout = setTimeout(() => {
        setCurrentText(prevText => (prevText !== '\u00A0' ? prevText : '') + textArray[textIndex][currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

    } else if (currentIndex === textArray[textIndex].length) {
        setTimeout(function () {
            if (textIndex === textArray.length - 1) {
                setTextIndex(0);
            } else {
                setTextIndex(prevIndex => prevIndex + 1);
            }
            setCurrentIndex(0);
            setCurrentText('\u00A0');
        }, duration);
    } else if (infinite) {
        setTimeout(function () {
            setCurrentIndex(0);
            setCurrentText('\u00A0');
        }, duration);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, duration, infinite, textArray, textIndex]);
 
  return currentText;
};

export default Typewriter;