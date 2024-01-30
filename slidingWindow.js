maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 2);
minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3);

function minSum(arr, size) {
  let min_value = Infinity;
  if (size > arr.length) {
    return null;
  }
  for (let i = 0; i <= arr.length - size; i++) {
    let attempt = 0;
    for (let j = i; j < i + size; j++) {
      attempt += arr[j];
    }
    if (attempt < min_value) {
      min_value = attempt;
    }
  }
  console.log(min_value);
  return min_value;
}

function maxSum(arr, size) {
  let max_value = -Infinity;
  if (size > arr.length) {
    return null;
  }
  if (size <= arr.length) {
    for (let i = 0; i <= arr.length - size; i++) {
      // 第一個迴圈是要找出index
      let attempt = 0;
      for (let j = i; j < i + size; j++) {
        attempt += arr[j];
        // window.push(arr[j]);
        // console.log(i, j);
        if (attempt > max_value) {
          max_value = attempt;
        }
      }
    }
    console.log(max_value);
    return max_value;
  }
}
