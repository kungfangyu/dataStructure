function rs(n) {
  console.log(`We are inside function rs(${n})`);
  if (n == 1) {
    return 10;
  } else {
    return rs(n - 1) + 15;
  }
}

console.log(rs(4));

// rs(3) => 25 + 15 = 40
// rs(2) => 10 + 15 = 25
// rs(1) => 10
