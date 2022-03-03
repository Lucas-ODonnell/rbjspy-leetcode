class Solution:
    def numberOfArithmeticSlices(self, nums: List[int]) -> int:
        answer = 0
        for i in range(len(nums)-2):
            if nums[i] - nums[i+1] == nums[i+1] - nums[i+2]:
                answer += 1
                for j in range(i+3, len(nums)):
                    if nums[j-1]-nums[j] == nums[i] - nums[i+1]:
                        answer += 1
                    else:
                        break
        return answer
        
