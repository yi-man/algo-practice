class Solution(object):
    def trap(self, height):
        if not height:
            return 0

        n = len(height)
        left, right = 0, n - 1  # 左右指针
        left_max, right_max = height[left], height[right]  # 记录左右最高柱子的高度
        water = 0  # 存储积水量

        while left < right:
            left_max = max(left_max, height[left])
            right_max = max(right_max, height[right])

            print('before----', left, right, left_max, right_max, water)

            # 如果左边的柱子较低，可以积水
            if height[left] < height[right]:
                water += left_max - height[left]
                left += 1
            # 如果右边的柱子较低，可以积水
            else:
                water += right_max - height[right]
                right -= 1

            # print('after-----', left, right, left_max, right_max, water)

        return water


height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
s = Solution()
s.trap(height)
