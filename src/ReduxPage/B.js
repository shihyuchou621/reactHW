import React from 'react';
import C from './C';

export default function B() {
  console.log('B');
  return (
    <div>
      B
      <C />
    </div>
  );
}
