let arrs = [[[["a", [["b", ["c"]], ["d"]]], [["e"]], [[["f", "g", "h"]]]]]];
//找出裡面的字
function collector(arr1) {
  let result = [];
  helper(arr1);
  return result;
  function helper(arr2) {
    for (let i = 0; i < arr2.length; i++) {
      if (Array.isArray(arr2[i])) {
        //如果該項還是一個array
        helper(arr2[i]);
      } else {
        result.push(arr2[i]);
      }
    }
  }
}

console.log(collector(arrs));
