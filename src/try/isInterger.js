function isInterger(n) {
  return ~~n === n; // ~補數(會捨去小數)，兩次補數會無條件捨去
}

export default isInterger;