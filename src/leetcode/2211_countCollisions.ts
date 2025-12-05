/**
 在一条无限长的公路上有 n 辆汽车正在行驶。汽车按从左到右的顺序按从 0 到 n - 1 编号，每辆车都在一个 独特的 位置。

给你一个下标从 0 开始的字符串 directions ，长度为 n 。directions[i] 可以是 'L'、'R' 或 'S' 分别表示第 i 辆车是向 左 、向 右 或者 停留 在当前位置。每辆车移动时 速度相同 。

碰撞次数可以按下述方式计算：

当两辆移动方向 相反 的车相撞时，碰撞次数加 2 。
当一辆移动的车和一辆静止的车相撞时，碰撞次数加 1 。
碰撞发生后，涉及的车辆将无法继续移动并停留在碰撞位置。除此之外，汽车不能改变它们的状态或移动方向。

返回在这条道路上发生的 碰撞总次数 。

 */

function countCollisions(directions: string): number {
  const len = directions.length;
  if (len === 0) return 0;

  // 移除最左边连续的L（它们会一直向左，不会碰撞）
  let left = 0;
  while (left < len && directions[left] === "L") {
    left++;
  }

  // 移除最右边连续的R（它们会一直向右，不会碰撞）
  let right = len - 1;
  while (right >= 0 && directions[right] === "R") {
    right--;
  }

  if (left > right) return 0;

  // 对于中间剩余的车辆，统计碰撞
  let collisions = 0;
  for (let i = left; i <= right; i++) {
    if (directions[i] !== "S") {
      collisions++;
    }
  }

  return collisions;
}
