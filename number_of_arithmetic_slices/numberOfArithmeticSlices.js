const numberOfArithmeticSlices = (nums) => {
	let answer = 0;
	for (let i=0; i<nums.length-2;i++) {
		if (nums[i]-nums[i+1] == nums[i+1]-nums[i+2]) {
			answer += 1
			for (let j=(i+3); j < nums.length; j++) {
				if (nums[j-1]-nums[j] == nums[i]-nums[i+1]) {
					answer += 1;
				} else {
					break;
				}
			}
		}
	}
	return answer;
};
