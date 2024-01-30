isSubsequence("hello", "hello Dear"); // true
isSubsequence("book", "brooklyn"); // true
isSubsequence("abc", "bac"); // false(order matters)
isSubsequence("abc", "abc"); // true

function isSubsequence(str1, str2) {
  if (str1.length === 0) {
    return true;
  }
  let point1 = 0;
  let point2 = 0;

  while (point2 < str2.length) {
    if (str1[point1] === str2[point1]) {
      point1++;
    }
    if (point1 >= str1.length) {
      console.log(true);
      return true;
    }
    point2++;
  }
  console.log(false);
  return false;
}
