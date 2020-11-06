import React from 'react';

export default function Tags(props) {
  const {
    tag,
    content,
    onClick,
    isChoice,
  } = props;

  return (
    <div
      className={isChoice?"tags tagChoice":"tags"}
      onClick={onClick}
      data-content={content}
    >{tag}</div>
  );
}
