function minSubLength(arr, sum) {
  let minLength = Infinity;
  let left = 0;
  let right = 0;
  let currentSum = 0;
  while (right < arr.length) {
    currentSum += arr[right];
    while (currentSum >= sum) {
      //update the min length
      if (minLength > right - left + 1) {
        minLength = right - left + 1;
      }
      currentSum -= arr[left];
      left++; //右邊的往右移一格
    }

    right++; //左邊的往右移一格
  }

  if (minLength == Infinity) {
    return 0;
  } else {
    return minLength;
  }
}

//找出最短的連續數字相加並大於等於第二個參數
console.log(minSubLength([9, 8, 1, 4, 9, 5, 1, 2], 11));
console.log(minSubLength([8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 60));
