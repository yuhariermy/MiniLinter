const _ = {
  clamp(number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },

  inRange(number, startVal, endVal) {
    if (typeof endVal === "undefined") {
      endVal = startVal;
      startVal = 0;
    }

    if (startVal > endVal) {
      let valueSwap = endVal;
      endVal = startVal;
      startVal = valueSwap;
    }

    if (number >= startVal && number <= endVal) {
      return true;
    } else {
      return false;
    }
  },

  words(theString) {
    return theString.split(" ");
  },

  pad(string, length) {
    if (length <= string.length) {
      return string;
    } else {
      const theSpace = " ";

      const difference = length - string.length;
      const spaceExtra = difference % 2;
      const spaceCount = Math.floor(difference / 2);
      return (
        theSpace.repeat(spaceCount) +
        string +
        theSpace.repeat(spaceCount + spaceExtra)
      );
    }
  },

  has(object, key) {
    if (typeof object[key] === "undefined") {
      return false;
    } else {
      return true;
    }
  },
};

// Do not write or modify code below this line.
module.exports = _;
