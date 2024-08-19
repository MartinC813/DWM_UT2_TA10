const getOdds = (nums) =>{
  return nums.reduce((a, b) => a + b, 0);
}


const nums = [1,1,1,1,1,1,3]


console.log(getOdds(nums))