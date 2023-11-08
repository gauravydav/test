function sort(input) {
  const charCount = {};
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }
  const charCountArray = [];
  for (const char in charCount) {
    charCountArray.push([char, charCount[char]]);
  }
  function quicksort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    const pivot = arr[0];
    const left = [];
    const right = [];
    for (let i = 1; i < arr.length; i++) {
      const char = arr[i][0];
      const count = arr[i][1];
      if (count > pivot[1] || (count === pivot[1] && char < pivot[0])) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...quicksort(left), pivot, ...quicksort(right)];
  }
  const sortedCharCount = quicksort(charCountArray);
  let result = "";
  for (const [char, count] of sortedCharCount) {
    result += char.repeat(count);
  }
  return result;
}
const str1 = "zzzzttteeeqqaao";
let str2 = "aaabbbrrrrrkkls";
const sortedString = sort(str1);
console.log(sortedString);
console.log(sort(str2));
