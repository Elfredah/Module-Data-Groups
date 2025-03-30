function findMax(elements) {
}

module.exports = findMax;

function findMax(elements) {
  // Check if the array is empty and return -Infinity
  if (elements.length === 0) {
    return -Infinity;
  }

  // Filter out non-numeric values and find the maximum of the remaining elements
  const numericElements = elements.filter(element => typeof element === 'number');

  // If there are no numeric elements, return -Infinity
  if (numericElements.length === 0) {
    return -Infinity;
  }

  // Use Math.max to find the maximum value from the filtered numeric elements
  return Math.max(...numericElements);
}

module.exports = findMax;
