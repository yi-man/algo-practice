class MaxHeap {
  private heap: number[]; // 存储堆的数组
  private size: number; // 当前堆的元素个数
  private capacity: number; // 堆的最大容量

  /**
   * 构造函数：初始化大顶堆
   * @param capacity 堆的最大容量（默认10）
   */
  constructor(capacity = 10) {
    this.capacity = capacity;
    this.heap = new Array(capacity).fill(0);
    this.size = 0;
  }

  // --------------- 私有工具方法 ---------------
  /**
   * 获取父节点下标
   * @param i 当前节点下标
   */
  private parent(i: number): number {
    return Math.floor((i - 1) / 2);
  }

  /**
   * 获取左子节点下标
   * @param i 当前节点下标
   */
  private leftChild(i: number): number {
    return 2 * i + 1;
  }

  /**
   * 获取右子节点下标
   * @param i 当前节点下标
   */
  private rightChild(i: number): number {
    return 2 * i + 2;
  }

  /**
   * 交换两个节点的值
   * @param i 节点1下标
   * @param j 节点2下标
   */
  private swap(i: number, j: number): void {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  /**
   * 上浮操作：插入元素后维护堆序（子>父则交换）
   * @param i 待上浮的节点下标
   */
  private siftUp(i: number): void {
    // 未到根节点，且当前节点 > 父节点 → 继续上浮
    while (i > 0 && this.heap[i] > this.heap[this.parent(i)]) {
      this.swap(i, this.parent(i));
      i = this.parent(i); // 移动到父节点位置，继续检查
    }
  }

  /**
   * 下沉操作：删除堆顶/构建堆时维护堆序（父<子则交换）
   * @param i 待下沉的节点下标
   */
  private siftDown(i: number): void {
    let maxIndex = i; // 记录当前节点和子节点中的最大值下标

    // 比较左子节点
    const left = this.leftChild(i);
    if (left < this.size && this.heap[left] > this.heap[maxIndex]) {
      maxIndex = left;
    }

    // 比较右子节点
    const right = this.rightChild(i);
    if (right < this.size && this.heap[right] > this.heap[maxIndex]) {
      maxIndex = right;
    }

    // 若最大值不是当前节点 → 交换并继续下沉
    if (i !== maxIndex) {
      this.swap(i, maxIndex);
      this.siftDown(maxIndex);
    }
  }

  // --------------- 公开操作方法 ---------------
  /**
   * 插入元素到堆中
   * @param val 要插入的数值
   * @throws 堆已满时抛出异常
   */
  insert(val: number): void {
    if (this.size === this.capacity) {
      throw new Error("Heap is full");
    }
    this.heap[this.size] = val; // 新元素放入数组末尾
    this.siftUp(this.size); // 上浮调整
    this.size++;
  }

  /**
   * 提取堆顶元素（最大值）
   * @returns 堆顶最大值
   * @throws 堆为空时抛出异常
   */
  extractMax(): number {
    if (this.size === 0) {
      throw new Error("Heap is empty");
    }
    const max = this.heap[0]; // 保存堆顶最大值
    this.heap[0] = this.heap[this.size - 1]; // 最后一个元素覆盖堆顶
    this.size--; // 元素个数减1
    this.siftDown(0); // 下沉调整堆顶
    return max;
  }

  /**
   * 获取堆顶元素（不删除）
   * @returns 堆顶最大值
   * @throws 堆为空时抛出异常
   */
  peekMax(): number {
    if (this.size === 0) {
      throw new Error("Heap is empty");
    }
    return this.heap[0];
  }

  /**
   * 从普通数组构建大顶堆
   * @param arr 待构建的数组
   * @throws 数组长度超过堆容量时抛出异常
   */
  buildHeap(arr: number[]): void {
    if (arr.length > this.capacity) {
      throw new Error("Array length exceeds heap capacity");
    }
    // 复制数组到堆中
    this.heap = [...arr];
    this.size = arr.length;
    // 从最后一个非叶子节点开始，从后往前下沉
    const lastNonLeaf = this.parent(this.size - 1);
    for (let i = lastNonLeaf; i >= 0; i--) {
      this.siftDown(i);
    }
  }

  /**
   * 获取堆的当前元素列表（仅返回有效元素）
   */
  getHeap(): number[] {
    return this.heap.slice(0, this.size);
  }

  /**
   * 判断堆是否为空
   */
  isEmpty(): boolean {
    return this.size === 0;
  }

  /**
   * 获取堆的当前元素个数
   */
  getSize(): number {
    return this.size;
  }
}

// --------------- 测试示例 ---------------
function testMaxHeap() {
  // 1. 初始化堆并插入元素
  const maxHeap = new MaxHeap(10);
  maxHeap.insert(5);
  maxHeap.insert(3);
  maxHeap.insert(8);
  maxHeap.insert(1);
  console.log("插入元素后堆结构：", maxHeap.getHeap()); // [8,3,5,1]
  console.log("堆顶元素：", maxHeap.peekMax()); // 8

  // 2. 提取最大值
  console.log("提取最大值：", maxHeap.extractMax()); // 8
  console.log("提取后堆结构：", maxHeap.getHeap()); // [5,3,1]
  console.log("新堆顶：", maxHeap.peekMax()); // 5

  // 3. 从数组构建堆
  const arr = [9, 7, 8, 5, 4, 6];
  maxHeap.buildHeap(arr);
  console.log("构建堆后结构：", maxHeap.getHeap()); // [9,7,8,5,4,6]
  console.log("构建堆后堆顶：", maxHeap.peekMax()); // 9

  // 4. 批量提取最大值
  console.log("批量提取最大值：");
  while (!maxHeap.isEmpty()) {
    console.log(maxHeap.extractMax()); // 9 → 8 → 7 → 6 → 5 → 4
  }
}

// 执行测试
testMaxHeap();
