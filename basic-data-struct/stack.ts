class Stack<T> {
  private items: T[] = [];

  // 入栈
  push(element: T): void {
    this.items.push(element);
  }

  // 出栈
  pop(): T | undefined {
    return this.items.pop();
  }

  // 查看栈顶元素
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  // 判断栈是否为空
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // 获取栈的大小
  size(): number {
    return this.items.length;
  }

  // 清空栈
  clear(): void {
    this.items = [];
  }
}

// 每日温度 leetcode 739    单调栈
function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length;
  const answer = new Array(n).fill(0);
  const stack = new Stack<number>(); // 存储索引

  for (let i = 0; i < n; i++) {
    // 当前温度大于栈顶索引的温度，弹出并计算差值
    while (!stack.isEmpty() && temperatures[i] > temperatures[stack.peek()!]) {
      const prevIndex = stack.pop()!;
      answer[prevIndex] = i - prevIndex;
    }
    stack.push(i);
  }

  return answer;
}

// 下一个更大元素 leetcode 496   单调栈
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const n1 = nums1.length;
  const n2 = nums2.length;
  const nextGreaterObj: {
    [k: number]: number;
  } = {};

  const stack: number[] = [];

  for (let i = 0; i < n2; i++) {
    const value2 = nums2[i];

    while (stack.length > 0 && value2 > nums2[stack[stack.length - 1]]) {
      const prevIndex = stack.pop();
      if (prevIndex) {
        const prevValue = nums2[prevIndex];
        nextGreaterObj[prevValue] = value2;
      }
    }
    stack.push(i);
  }

  const answer: number[] = new Array(n1).fill(-1);

  for (let i = 0; i < n1; i++) {
    const value = nums1[i];

    answer[i] = nextGreaterObj[value] || -1;
  }

  return answer;
}

// 接雨水 leetcode 42   单调栈
function trap(height: number[]): number {
  let ans = 0;
  const stack: number[] = [];
  const n = height.length;
  for (let i = 0; i < n; ++i) {
    while (stack.length && height[i] > height[stack[stack.length - 1]]) {
      const top = stack.pop()!;
      if (!stack.length) {
        break;
      }
      const left = stack[stack.length - 1]!;
      const currWidth = i - left - 1;
      const currHeight = Math.min(height[left], height[i]) - height[top];
      ans += currWidth * currHeight;
    }
    stack.push(i);
  }
  return ans;
}
