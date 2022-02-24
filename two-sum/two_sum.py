class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        object = {}
        for idx in range(0, len(nums)):
            if (target-nums[idx]) in object:
                return [object[target-nums[idx]], idx]
            object[nums[idx]] = idx

