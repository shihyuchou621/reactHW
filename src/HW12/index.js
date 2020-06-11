import React, { Component } from 'react'

import Tags from "./Tags";

import "./style.css"

const tagList = [
  ['Tag1','標籤1內容'],
  ['Tag2','標籤2內容'],
  ['Tag3','標籤3內容'],
  ['Tag4','標籤4內容'],
]

export default class HW12 extends Component {
  constructor() {
    super();
    this.state = {
      content: tagList[0][1],
      tag: tagList[0][0],
      tagClass: "tags",
      tagIndex: 0,
    }
  }
  
  handleClick = (tag, index, { target }) => {
    this.setState({
      content: target.dataset.content,
      tag: tag,
      tagIndex: index,
    });
  };

  render() {
    const{
      handleClick,
      state: {content, tagIndex },
    } = this;

    return (
      <>
        <div className="tagsPool">
          {tagList.map((tag, index) => 
            <Tags 
              key={index}
              tag={tag[0]}
              content={tag[1]}
              isChoice={tagIndex === index}
              onClick={handleClick.bind(this, tag, index)}
            />)}
          <div className="tagWhite" />
        </div>
        <div>
          {content}
        </div>
      </>
    )
  }
}
