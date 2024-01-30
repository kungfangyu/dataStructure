function bubbleSort(arr) {
  for (let i = 0; i <= arr.length - 2; i++) {
    for (let j = arr.length - 1; j >= i + 1; j--) {
      if (arr[j] < arr[j - 1]) {
        //swap arr[j] and arr[j-1]
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  console.log(arr);
}

let arr = [4, 7, 1, 8, 9, 3];

bubbleSort(arr);
