import React from "react";

const quickSort = (arr, desc) => {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[Math.floor(arr.length / 2)];
  const middle = arr.filter((el) => el === pivot);
  const lows = quickSort(arr.filter((el) => el < pivot));
  const highs = quickSort(arr.filter((el) => el > pivot));

  return desc ? [...highs, ...middle, ...lows] : [...lows, ...middle, ...highs];
};

const result = ({ nums, desc }) => {
  const result = quickSort(nums, desc).join(", ");
  return (
    <div className="container">
      <h4>{desc ? "오름차순" : "내림차순"}</h4>
      <p>{result}</p>
    </div>
  );
};

export default result;
