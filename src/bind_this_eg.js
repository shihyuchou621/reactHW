function add(x, y) {
  return x + y;
}

add(1, 2);

const add1 = add.bind(null, 1);
add1(2)