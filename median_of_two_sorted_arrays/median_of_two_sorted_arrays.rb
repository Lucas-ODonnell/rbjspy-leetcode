def find_median_sorted_arrays(nums1, nums2)
    answer = (nums1+nums2).sort
    if answer.length.odd?
        answer[answer.length/2]
    else
        idx = answer.length/2
        (answer[idx-1] + answer[idx])/2.0
    end
end
