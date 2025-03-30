function sum(elements) {
}

module.exports = sum;

function sum(elements) {
    // Ensure the array is not empty and return the sum of numeric values
    return elements.reduce((acc, curr) => {
      // Only add the element if it is a number
      if (typeof curr === 'number') {
        return acc + curr;
      }
      return acc;
    }, 0);
  }
  
  module.exports = sum;

  const sum = require("./sum");

describe("sum", () => {
  test("returns the sum of the elements in the array", () => {
    expect(sum([1, 2, 3])).toEqual(6);
    expect(sum([10, -5, 2])).toEqual(7);
  });

  test("ignores non-numeric values", () => {
    expect(sum([1, 'hello', 3])).toEqual(4);
    expect(sum([10, 'apple', 5, 'banana'])).toEqual(15);
  });

  test("returns 0 for an empty array", () => {
    expect(sum([])).toEqual(0);
  });
});

  
