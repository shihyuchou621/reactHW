import React, { useState } from 'react';

function counter() {
  const [ count, setCount ] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)} />+1
      <div>click {count} times</div>
    </div>
  );
}

