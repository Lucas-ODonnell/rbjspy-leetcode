const lengthOfLongestSubstring = (s) => {
	answer = 0
	current = []
	i = 0
	while (i < s.length) {
		if (!current.includes(s[i])) {
			current.push(s[i])
			i += 1
		} else {
			if (current.length > answer) { answer = current.length }
			current.shift()
		}
	}
	if (current.length > answer) { answer = current.length }
	return answer   
};
