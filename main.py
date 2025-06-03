num1 = [1,2,3,4,5,6,7,8,9]
num2 = [4,534,1]

def select(nums):
    n = len(nums)
    for i in range(n):
        k = i
        for j in range(i+1,n):
            if nums[k] > nums[j]:
                k = j
        nums[k],nums[i] = nums[i],nums[k]

num1.extend(num2)
select(num1)
print(num1)