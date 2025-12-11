/* eslint-disable @typescript-eslint/no-non-null-assertion */
// 双向链表节点
class ListNode {
  key: number;
  value: number;
  prev: ListNode | null;
  next: ListNode | null;
  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// 哈希链表（LRU 缓存核心结构）
export class HashLinkedList {
  private map: Map<number, ListNode>; // 哈希表：key -> 节点
  private head: ListNode; // 虚拟头节点
  private tail: ListNode; // 虚拟尾节点

  constructor() {
    this.map = new Map();
    this.head = new ListNode(-1, -1);
    this.tail = new ListNode(-1, -1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  // 插入节点到表头（最近使用）
  private addToHead(node: ListNode) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next!.prev = node;
    this.head.next = node;
  }

  // 删除节点
  private removeNode(node: ListNode) {
    node.prev!.next = node.next;
    node.next!.prev = node.prev;
  }

  // 查找：O(1)
  get(key: number): number {
    if (!this.map.has(key)) return -1;
    const node = this.map.get(key)!;
    this.removeNode(node); // 移到表头表示“最近使用”
    this.addToHead(node);
    return node.value;
  }

  // 插入：O(1)
  put(key: number, value: number) {
    if (this.map.has(key)) {
      const node = this.map.get(key)!;
      node.value = value;
      this.removeNode(node);
      this.addToHead(node);
    } else {
      const newNode = new ListNode(key, value);
      this.map.set(key, newNode);
      this.addToHead(newNode);
      // 若缓存满，删除表尾节点（最少使用）
      // if (this.map.size > capacity) { ... }
    }
  }
}
