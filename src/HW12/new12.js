import React, { Component } from 'react';

import './new12.css';

export default class New12 extends Component {
  constructor() {
    super();
    this.state = {
      choiceIndex: 0,
      tagList: [
        {name: 'tag1', content: "lorem 1"},
        {name: 'tag2', content: "lorem 2"},
        {name: 'tag3', content: "lorem 3"},
        {name: 'tag4', content: "lorem 4"},
      ]
    };
  }

  handleClick = choiceIndex => {
    this.setState({ choiceIndex });
  }

  render() {
    const { tagList, choiceIndex } = this.state;
    return (
      <div className="HW12">
        {tagList.map((tag, index) =>
          <div
            key={index}
            className={`tag-name${index === choiceIndex ? " choice" : ""}`}
            onClick={this.handleClick.bind(this, index)}
          >
            {tag.name}
          </div>
        )}
        <div className="content">{tagList[choiceIndex].content}</div>
      </div>
    );
  }
}
