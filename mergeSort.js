//complexity O(n log n)

function merge(a1, a2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < a1.length && j < a2.length) {
    if (a1[i] > a2[j]) {
      result.push(a2[j]);
      j++;
    } else {
      result.push(a1[i]);
      i++;
    }
  }

  //a1 or a2 might have some element left
  //use loop to put them all into result

  while (i < a1.length) {
    result.push(a1[i]);
    i++;
  }

  while (j < a2.length) {
    result.push(a2[j]);
    j++;
  }
  return result;
}

console.log(merge([1, 15, 17], [-3, 9, 16]));

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);
    return merge(mergeSort(right), mergeSort(left));
  }
}

console.log(mergeSort([15, 3, 17, 18, 35, 11, 0, 36, -336, 1054]));
