const nums = [3, 1, 7, 9, 4, 6];

// Função pura
const order = (arr = []) => {
  return [...arr].sort((a, b) => a - b);
};

const orderedNums = order(nums);

console.log(nums, orderedNums);
