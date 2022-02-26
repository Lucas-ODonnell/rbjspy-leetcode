const longestPalindrome = (s) => {
	answer = s.substring(0,1);
	for (let i = 0; i < s.length; i++) {
		temp = expand(s, i, i);
		if (temp.length > answer.length) { answer = temp }
		temp = expand(s,i, i+1);
		if (temp.length > answer.length) { answer = temp }
	}
	return answer;
};

const expand = (s, first, last) => {
	while(s[first] === s[last] && first >= 0 && last < s.length) {
		first -= 1
		last += 1
	}
	return s.substring(first+1, last)
}
