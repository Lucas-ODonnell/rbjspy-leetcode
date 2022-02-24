class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        answer = 0
        current = []
        i = 0
        while i < len(s):
            if s[i] not in current:
                current.append(s[i])
                i += 1
            else:
                if len(current) > answer: answer = len(current)
                current.pop(0)
        if len(current) > answer: answer = len(current)
        return answer
