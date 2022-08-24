function binarySearch (needle, haystack/*number[]*/, start = 0, end = haystack.length) {
  const pivot = Math.floor((start + end) / 2);

  if(needle === haystack[pivot]) return pivot;
  if(pivot === start) return -1;

  if(needle > haystack[pivot]) return binarySearch(needle, haystack, pivot, end);
  if(needle <  haystack[pivot]) return binarySearch(needle, haystack, start, pivot)
}

console.log(
  binarySearch(1, [1, 3, 4, 7, 10, 13, 15, 18, 21])
);