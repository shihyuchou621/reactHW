import React from 'react';
import { useParams } from "react-router-dom";

import HWList from '../../HW/hooks';
export default function HWPage() {
  const { no } = useParams();
  return (
    React.createElement(HWList[no])
  );
}
