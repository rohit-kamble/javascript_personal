// color_pattern_times(["Red", "Blue", "Red", "Blue", "Red"]) ➞ 14

// There are 5 colors so it takes 2 seconds to color each one (2 x 5 = 10).
// You need to switch the pencils 4 times and it takes 1 second to switch (1 x 4 = 4).
// 10 + 4 = 14

// colorPatternTimes(["Blue"]) ➞ 2

// colorPatternTimes(["Red", "Yellow", "Green", "Blue"]) ➞ 11

// colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"]) ➞ 13

function colorPatternTimes(arr) {
  let count = 0;
  if (arr.length === 1) {
    count++;
  } else {
    arr.forEach((item, idx) => {
      if (idx >= 1 && item !== arr[Math.abs(idx - 1)]) {
        count++;
      }
    });
  }

  return count + arr.length * 2;
}
console.log(colorPatternTimes(["Red", "Blue", "Red", "Blue", "Red"]));
