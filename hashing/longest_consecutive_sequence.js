

function longestConsecutive(nums) {
    const hashmap = new Map();
    let longest_consecutive = 0;

    for(let index = 0; index < nums.length; index++) {
        let currentValue = nums[index];
        hashmap.set(currentValue, true);
    }

    for(let index = 0; index < nums.length; index++) {
        let currentValue = nums[index];
        let current_count = 0;

        while(hashmap.get(currentValue--)){
            current_count++;
        }

        longest_consecutive = Math.max(longest_consecutive,current_count)
    }
    return longest_consecutive
}

console.log(longestConsecutive([0,3,2,5,4,6,1,1]))
console.log(longestConsecutive([2,20,4,10,3,4,5]))