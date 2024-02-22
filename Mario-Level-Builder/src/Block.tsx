import { useState } from "react";

export const Block = () => {
  const blockTypes = [
    "air",
    "ground",
    "brick",
    "square-brick",
    "smooth-brick",
    "question",
    "pipe",
    "pipe-top",
  ];
  const [blockType, setBlockType] = useState(blockTypes[0]);

  const handleClick = () => {
    let currentIndex = blockTypes.indexOf(blockType);
    if (currentIndex === blockTypes.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    setBlockType(blockTypes[currentIndex]);
  };

  const getBlockImage = (blockType: String) => {
    switch (blockType) {
      case "air":
        return <></>;
      case "ground":
        return (
          <img src="groundBlock.jpeg" alt="ground" width={16} height={16} />
        );
      case "brick":
        return <img src="brick.jpeg" alt="brick" width={16} height={16} />;
      case "square-brick":
        return (
          <img
            src="squareBrick.jpeg"
            alt="square-brick"
            width={16}
            height={16}
          />
        );
      case "smooth-brick":
        return (
          <img
            src="smoothBrick.jpeg"
            alt="smooth-brick"
            width={16}
            height={16}
          />
        );
      case "question":
        return (
          <img src="question.jpeg" alt="question" width={16} height={16} />
        );
      case "pipe":
        return <img src="pipe.jpeg" alt="pipe" width={12} height={16} />;
      case "pipe-top":
        return <img src="pipe-top.png" alt="pipe-top" width={16} height={16} />;
      default:
        return <></>;
    }
  };

  return (
    <button className="block" onClick={handleClick}>
      {getBlockImage(blockType)}
    </button>
  );
};
