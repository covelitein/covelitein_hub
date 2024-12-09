import React from "react";

type HighlightMiddleProps = {
  text: string;
};

const HighlightMiddleWord: React.FC<HighlightMiddleProps> = ({ text }) => {
  // Split the text into words
  const words = text.split(" ");

  // Find the middle word index
  const middleIndex = Math.floor(words.length / 2);

  // Map words, applying the color to the middle word
  const highlightedText = words.map((word, index) => {
    if (index === middleIndex) {
      return (
        <span key={index} className="text-blue-600">
          {word}
        </span>
      );
    }
    return <span key={index}> {word} </span>;
  });

  return <p>{highlightedText}</p>;
};

export default HighlightMiddleWord;
