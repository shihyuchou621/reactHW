import React from 'react';
import {
  Link,
} from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <ul>
        <li><Link to="/HW1">HW1</Link></li>
        <li><Link to="/HW2">HW2</Link></li>
      </ul>
    </div>
  );
}
