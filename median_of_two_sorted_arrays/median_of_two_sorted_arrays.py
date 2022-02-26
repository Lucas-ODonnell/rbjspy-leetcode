class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        answer = nums1+nums2
        answer.sort()
        if len(answer) % 2 == 0:
            idx = int(len(answer)/2)
            return (answer[idx-1]+answer[idx])/2
        else: 
            return answer[int(len(answer)/2)]
