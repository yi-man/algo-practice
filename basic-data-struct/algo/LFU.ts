// 定义双向链表节点
class LFUCacheNode<K = number, V = number> {
  key: K;
  value: V;
  freq: number; // 访问频率
  prev: LFUCacheNode<K, V> | null;
  next: LFUCacheNode<K, V> | null;

  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
    this.freq = 1; // 初始频率为1
    this.prev = null;
    this.next = null;
  }
}

// 定义双向链表（用于存储同一频率的节点）
class DoublyLinkedList<K = number, V = number> {
  head: LFUCacheNode<K, V>; // 哑头节点
  tail: LFUCacheNode<K, V>; // 哑尾节点
  size: number;

  constructor() {
    this.head = new LFUCacheNode<K, V>({} as K, {} as V);
    this.tail = new LFUCacheNode<K, V>({} as K, {} as V);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }

  // 在链表尾部添加节点（最近访问的节点放尾部）
  addToTail(node: LFUCacheNode<K, V>): void {
    const prev = this.tail.prev!;
    prev.next = node;
    node.prev = prev;
    node.next = this.tail;
    this.tail.prev = node;
    this.size++;
  }

  // 删除指定节点
  removeNode(node: LFUCacheNode<K, V>): void {
    if (this.size === 0) return;

    const prev = node.prev!;
    const next = node.next!;
    prev.next = next;
    next.prev = prev;
    this.size--;

    // 清空节点的指针，避免内存泄漏
    node.prev = null;
    node.next = null;
  }

  // 删除链表头部节点（最久未使用的节点）
  removeHead(): LFUCacheNode<K, V> | null {
    if (this.size === 0) return null;

    const headNode = this.head.next!;
    this.removeNode(headNode);
    return headNode;
  }

  // 判断链表是否为空
  isEmpty(): boolean {
    return this.size === 0;
  }
}

// LFU 缓存核心类
class LFUCache<K = number, V = number> {
  private capacity: number; // 缓存容量
  private minFreq: number; // 当前最小访问频率
  private keyToNode: Map<K, LFUCacheNode<K, V>>; // key -> 节点
  private freqToList: Map<number, DoublyLinkedList<K, V>>; // 频率 -> 双向链表

  constructor(capacity: number) {
    if (capacity < 0) throw new Error("容量不能为负数");
    this.capacity = capacity;
    this.minFreq = 0;
    this.keyToNode = new Map();
    this.freqToList = new Map();
  }

  // 获取缓存值，复杂度 O(1)
  get(key: K): V | -1 {
    // 缓存不存在，返回 -1
    if (!this.keyToNode.has(key)) return -1 as V;

    const node = this.keyToNode.get(key)!;
    const oldFreq = node.freq;
    // 1. 从旧频率的链表中移除节点
    const oldList = this.freqToList.get(oldFreq)!;
    oldList.removeNode(node);

    // 2. 如果旧频率是最小频率，且链表为空，更新最小频率
    if (oldFreq === this.minFreq && oldList.isEmpty()) {
      this.minFreq++;
      // 清理空链表，避免内存占用
      this.freqToList.delete(oldFreq);
    }

    // 3. 增加节点频率，并添加到新频率的链表中
    node.freq++;
    const newFreq = node.freq;
    if (!this.freqToList.has(newFreq)) {
      this.freqToList.set(newFreq, new DoublyLinkedList<K, V>());
    }
    const newList = this.freqToList.get(newFreq)!;
    newList.addToTail(node);

    return node.value;
  }

  // 存入缓存值，复杂度 O(1)
  put(key: K, value: V): void {
    // 容量为 0，直接返回
    if (this.capacity === 0) return;

    // 1. key 已存在，更新值并更新频率
    if (this.keyToNode.has(key)) {
      const node = this.keyToNode.get(key)!;
      node.value = value; // 更新值
      this.get(key); // 复用 get 方法更新频率（等价于访问一次）
      return;
    }

    // 2. 容量已满，需要淘汰最小频率的最久未使用节点
    if (this.keyToNode.size >= this.capacity) {
      // 获取最小频率对应的链表
      const minList = this.freqToList.get(this.minFreq)!;
      // 删除链表头部节点（最久未使用）
      const removedNode = minList.removeHead()!;
      // 从 keyToNode 中移除
      this.keyToNode.delete(removedNode.key);
      // 如果链表为空，清理频率映射
      if (minList.isEmpty()) {
        this.freqToList.delete(this.minFreq);
      }
    }

    // 3. 添加新节点
    const newNode = new LFUCacheNode<K, V>(key, value);
    this.keyToNode.set(key, newNode);
    this.minFreq = 1; // 新节点频率为 1，最小频率重置为 1

    // 4. 将新节点添加到频率 1 的链表中
    if (!this.freqToList.has(1)) {
      this.freqToList.set(1, new DoublyLinkedList<K, V>());
    }
    const list = this.freqToList.get(1)!;
    list.addToTail(newNode);
  }
}

// 测试示例
const lfu = new LFUCache(2);
lfu.put(1, 1); // 缓存: {1:1}，频率1
lfu.put(2, 2); // 缓存: {1:1, 2:2}，频率1
console.log(lfu.get(1)); // 输出 1，1的频率变为2，minFreq=1
lfu.put(3, 3); // 容量满，淘汰频率1的最久未使用节点2，缓存: {1:1, 3:3}
console.log(lfu.get(2)); // 输出 -1
console.log(lfu.get(3)); // 输出 3，3的频率变为2，minFreq=2
lfu.put(4, 4); // 容量满，淘汰最小频率2的最久未使用节点1，缓存: {3:3, 4:4}
console.log(lfu.get(1)); // 输出 -1
console.log(lfu.get(3)); // 输出 3，3的频率变为3，minFreq=2
console.log(lfu.get(4)); // 输出 4，4的频率变为2，minFreq=2
