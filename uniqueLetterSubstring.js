//找出不重複的string有幾個
function uniqueLetterSubstring(str) {
  let start = 0;
  let end = 0;
  let counter = {};
  let maxLength = -Infinity;

  while (end < str.length) {
    console.log(counter);
    if (counter[str[end]]) {
      counter[str[start]]--;
      start++;
    } else {
      // 找不到
      counter[str[end]] = 1;
      end++;
      if (end - start > maxLength) {
        maxLength = end - start;
      }
    }
  }
  if (maxLength == -Infinity) {
    console.log("Cannot find unique letters substring");
    return null;
  }

  console.log(maxLength);
  return maxLength;
}

uniqueLetterSubstring("thisisshowwedoit"); //6
