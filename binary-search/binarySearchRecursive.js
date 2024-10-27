export function BinarySearchRecursive(search, values, start, end, comparator) {
  const mid = Math.floor((start + end) / 2);
  const comp = comparator(search, values[mid]);

  if (comp === 0) {
    console.log("Element Found!");
    return mid;
  } else if (comp > 0) {
    return BinarySearchRecursive(search, values, mid + 1, end, comparator);
  } else {
    return BinarySearchRecursive(search, values, start, mid - 1, comparator);
  }
}
