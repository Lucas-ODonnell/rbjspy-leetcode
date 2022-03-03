def number_of_arithmetic_slices(nums)
  answer = 0
  (0...nums.length-2).each do |idx|
    if nums[idx] - nums[idx+1] == nums[idx+1]-nums[idx+2]
      answer += 1
      (idx+3...nums.length).each do |idx2|
        if nums[idx2-1]-nums[idx2] == nums[idx] - nums[idx+1]
          answer += 1
          else
          break
        end
      end
    end
  end
  answer
end
