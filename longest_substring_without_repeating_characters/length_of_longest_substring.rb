def length_of_longest_substring(s)
    answer = 0
    current = []
    i = 0
    while i < s.length
        if !current.include?(s[i])
            current << s[i]
            i += 1
        else
            answer = current.length if current.length > answer
            current.shift
        end
    end
    answer = current.length if current.length > answer
    answer
end
