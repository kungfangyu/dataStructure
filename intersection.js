function test(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
      }
    }
  }
  console.log("重複的數字:", result);
  return result;
}

test([1, 2, 55, 9], [4, 22, 55, 9]);

function intersection(arr1, arr2) {
  let result = [];
  let arr3 = arr1.concat(arr2);
  let counter = {};

  for (i = 0; i < arr3.length; i++) {
    if (!counter[arr3[i]]) {
      counter[arr3[i]] = 1;
    } else {
      counter[arr3[i]]++;
    }
  }

  for (let property in counter) {
    if (counter[property] >= 2) {
      result.push(property);
    }
  }
  console.log(result);

  return result;
}
intersection([1, 2, 55, 9], [4, 22, 55, 9]);
