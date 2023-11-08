function sort(s) {
  let freq = {};
  for (let i = 0; i < s.length; i++) {
    if (freq[s[i]]) {
      freq[s[i]]++;
    } else {
      freq[s[i]] = 1;
    }
  }

  let sortedString = Object.entries(freq).sort(
    (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
  );

  return sortedString.map(([char, count]) => char.repeat(count)).join("");
}

let str1 = "zzzzttteeeqqaao";
console.log(sort(str1));
let str2 = "aaabbbrrrrrkkls";
console.log(sort(str2));
