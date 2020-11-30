import React, { useState } from 'react';

import style from './new12.module.css';

const tagList = [
  {name: 'tag1', content: "lorem 1"},
  {name: 'tag2', content: "lorem 2"},
  {name: 'tag3', content: "lorem 3"},
  {name: 'tag4', content: "lorem 4"},
];

export default function New12() {

  const [choiceIndex, setChoiceIndex] = useState(0);

  const handleClick = choiceIndex => {
    setChoiceIndex(choiceIndex);
  };

  return (
    <div className={style.HW12}>
      <h2>標籤</h2>
      {tagList.map((tag, index) =>
        <div
          key={index}
          className={`${style.tagName} ${index === choiceIndex ? style.choice : ""}`}
          onClick={handleClick.bind(this, index)}
        >
          {tag.name}
        </div>
      )}
      <div className={style.content}>
        {tagList[choiceIndex].content}
      </div>
    </div>
  );
}
