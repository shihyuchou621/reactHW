import React, { Component } from 'react';

export default class Tags extends Component {
  render() {
    const {
      tag,
      content,
      onClick,
      isChoice,
    } = this.props;

    return (
      <div className={isChoice?"tags tagChoice":"tags"} onClick={onClick} data-content={content}>{tag}</div>
    );
  }
}
