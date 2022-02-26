class Solution:
    def longestPalindrome(self, s):
        answer = s[0:1]
        for index in range(len(s)):
            temp = self.expand(s, index, index)
            if len(temp) > len(answer):
                answer = temp
            temp = self.expand(s, index, index+1)
            if len(temp) > len(answer):
                answer = temp
        return answer

    def expand(self, s, first, last):
        while first >= 0 and last < len(s) and s[first] == s[last]:
            first -= 1
            last += 1
        return s[first+1:last]
