const findMedianSortedArrays = (nums1, nums2) => {
	answer = nums1.concat(nums2).sort((a,b)=> {
		return a-b
	});
	if (answer.length % 2 !== 0) {
		idx = Math.floor(answer.length/2)
		return answer[idx];
	} 
	idx = answer.length/2
	return (answer[idx-1] + answer[idx])/2.0;
};
