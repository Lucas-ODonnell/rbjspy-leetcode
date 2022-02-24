def two_sum(nums, target)
    hash = {}
    (0...nums.length).each do |idx|
        if hash.keys.include?(target-nums[idx])
            return [hash[target-nums[idx]], idx]
        end
        hash[nums[idx]] = idx
    end
end
