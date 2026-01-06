function permute(nums: number[]): number[][] {
  // 主函数，输入一组不重复的数字，返回它们的全排列
  const res: number[][] = [];
  // 记录「路径」
  const track: number[] = [];
  // 「路径」中的元素会被标记为 true，避免重复使用
  const used = new Array(nums.length).fill(false);

  function backtrack(nums: number[], track: number[], used: boolean[]) {
    // 路径：记录在 track 中
    // 选择列表：nums 中不存在于 track 的那些元素（used[i] 为 false）
    // 结束条件：nums 中的元素全都在 track 中出现
    if (track.length === nums.length) {
      // 触发结束条件
      res.push([...track]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      // 排除不合法的选择
      if (used[i]) {
        // nums[i] 已经在 track 中，跳过
        continue;
      }
      // 做选择
      track.push(nums[i]);
      used[i] = true;
      // 进入下一层决策树
      backtrack(nums, track, used);
      // 取消选择
      track.pop();
      used[i] = false;
    }
  }

  backtrack(nums, track, used);
  return res;
}
