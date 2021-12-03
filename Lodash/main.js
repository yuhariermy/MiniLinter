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
};

// Do not write or modify code below this line.
module.exports = _;
