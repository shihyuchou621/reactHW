import React, { Component } from 'react';

import Tooltip from './Tooltip';

import './style.css';

export default class index extends Component {
  render() {
    return (
      <div>
        <Tooltip at="top" text="我在上面">
          <button>top</button>
        </Tooltip>
      </div>
    )
  }
}
