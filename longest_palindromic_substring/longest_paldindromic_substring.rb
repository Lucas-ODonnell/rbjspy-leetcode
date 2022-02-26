def longest_palindrome(s)
    return s if s.length <= 1
    answer = s[0]
    (0...s.length).each do |idx|
        temp = expand(s, idx, idx)
        answer = temp.length > answer.length ? temp : answer
        temp = expand(s, idx, idx+1)
        answer = temp.length > answer.length ? temp: answer
    end
    answer
end

def expand(s, first, last)
    while s[first] == s[last] && first >= 0 && last <= s.length-1
        first -= 1
        last += 1
    end
    return s[first+1...last]
end
