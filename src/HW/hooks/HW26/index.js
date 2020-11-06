import React from 'react';

import Tooltip from './Tooltip';

import style from './style.module.css';

export default function Index() {
  return (
    <div className={style.background}>
      <div>
        <Tooltip at="top" text="我在上面">
          <button className="btn btn-primary">top</button>
        </Tooltip>
        <Tooltip at="right" text="text">
          <button className="btn btn-primary">right</button>
        </Tooltip>
      </div>
      <div>
        <Tooltip at="left" text="text">
          <button className="btn btn-primary">left</button>
        </Tooltip>
        <Tooltip at="bottom" text="text">
          <button className="btn btn-primary">bottom</button>
        </Tooltip>
      </div>
    </div>
  );
}
