// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
  const median = list.splice(middleIndex, 1)[0];
  return median;
}

module.exports = calculateMedian;

function calculateMedian(list) {
  if (!Array.isArray(list) || list.length === 0) {
    return undefined; // Handle invalid or empty array input
  }

  const sortedList = [...list].sort((a, b) => a - b); // Create a sorted copy

  const middleIndex = Math.floor(sortedList.length / 2);

  // Check if the length is odd or even
  if (sortedList.length % 2 === 0) {
    // Even length: calculate the average of the two middle values
    const median1 = sortedList[middleIndex - 1];
    const median2 = sortedList[middleIndex];
    return (median1 + median2) / 2;
  } else {
    // Odd length: return the middle value
    return sortedList[middleIndex];
  }
}

module.exports = calculateMedian;

