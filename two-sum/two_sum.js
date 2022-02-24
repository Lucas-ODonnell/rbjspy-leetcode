const twoSum = (nums, target) => {
    object = {}
    for (let i=0; i <= nums.length; i++) {
        if (object.hasOwnProperty(target-nums[i])) {
            return [object[target-nums[i]], i];
        }
        object[nums[i]] = i
    }
};
