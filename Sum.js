function sum(nums){
    let currentSum = 0;
    for(let i = 0; i < nums.length; i++){
        currentSum = currentSum + nums[i];
    }

    return currentSum;
}
const array = [1,2,3,4,5];
console.log(sum(array));
