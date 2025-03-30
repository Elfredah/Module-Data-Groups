// median.test.js

// Someone has implemented calculateMedian but it isn't
// passing all the tests...
// Fix the implementation of calculateMedian so it passes all tests

const calculateMedian = require("./median.js");

describe("calculateMedian", () => {
  test("returns the median for odd length array", () => {
    expect(calculateMedian([1, 2, 3])).toEqual(2);
    expect(calculateMedian([1, 2, 3, 4, 5])).toEqual(3);
  });

  test("returns the average of middle values for even length array", () => {
    expect(calculateMedian([1, 2, 3, 4])).toEqual(2.5);
    expect(calculateMedian([1, 2, 3, 4, 5, 6])).toEqual(3.5);
  });

  test("doesn't modify the input", () => {
    const list = [1, 2, 3];
    calculateMedian(list);

    expect(list).toEqual([1, 2, 3]);
  });
});



const calculateMedian = require("./median.js");

describe("calculateMedian", () => {
  test("returns the median for odd length array", () => {
    expect(calculateMedian([1, 2, 3])).toEqual(2); // Odd length, median is 2
    expect(calculateMedian([1, 2, 3, 4, 5])).toEqual(3); // Odd length, median is 3
  });

  test("returns the average of middle values for even length array", () => {
    expect(calculateMedian([1, 2, 3, 4])).toEqual(2.5); // Even length, median is average of 2 and 3
    expect(calculateMedian([1, 2, 3, 4, 5, 6])).toEqual(3.5); // Even length, median is average of 3 and 4
  });

  test("doesn't modify the input", () => {
    const list = [1, 2, 3];
    calculateMedian(list);

    expect(list).toEqual([1, 2, 3]); // Ensure the original list remains unchanged
  });
});
