/**
leetcode: https://leetcode.cn/problems/find-all-people-with-secret/

给你一个整数 n ，表示有 n 个专家从 0 到 n - 1 编号。另外给你一个下标从 0 开始的二维整数数组 meetings ，其中 meetings[i] = [xi, yi, timei] 表示专家 xi 和专家 yi 在时间 timei 要开一场会。一个专家可以同时参加 多场会议 。最后，给你一个整数 firstPerson 。

专家 0 有一个 秘密 ，最初，他在时间 0 将这个秘密分享给了专家 firstPerson 。接着，这个秘密会在每次有知晓这个秘密的专家参加会议时进行传播。更正式的表达是，每次会议，如果专家 xi 在时间 timei 时知晓这个秘密，那么他将会与专家 yi 分享这个秘密，反之亦然。

秘密共享是 瞬时发生 的。也就是说，在同一时间，一个专家不光可以接收到秘密，还能在其他会议上与其他专家分享。

在所有会议都结束之后，返回所有知晓这个秘密的专家列表。你可以按 任何顺序 返回答案。


 */

// 长链路有问题
/**
  时间 t: 
- 会议1: A-B (A知道秘密)
- 会议2: B-C (B还不知道，但处理会议1后B会知道)
- 会议3: C-D (C还不知道)
 */
function findAllPeople(
  n: number,
  meetings: number[][],
  firstPerson: number
): number[] {
  meetings.sort((a, b) => {
    const [x1, y1, time1] = a;
    const [x2, y2, time2] = b;

    if (time1 !== time2) {
      return time1 - time2;
    }

    if (x1 === firstPerson || y1 === firstPerson || x1 === 0 || y1 === 0) {
      return -1;
    }

    return 1;
  });

  const len = meetings.length;
  const allPerson = new Set<number>([0, firstPerson]);

  for (let i = 0; i < len; i++) {
    const [x, y, time] = meetings[i];

    if (allPerson.has(x)) {
      allPerson.add(y);
    }
    if (allPerson.has(y)) {
      allPerson.add(x);
    }
  }

  return [...allPerson].sort();
}

function findAllPeople(
  n: number,
  meetings: number[][],
  firstPerson: number
): number[] {
  meetings.sort((a, b) => {
    const [x1, y1, time1] = a;
    const [x2, y2, time2] = b;

    if (time1 !== time2) {
      return time1 - time2;
    }

    if (x1 === firstPerson || y1 === firstPerson || x1 === 0 || y1 === 0) {
      return -1;
    }

    return 1;
  });

  console.log(111111111, meetings);

  const len = meetings.length;
  const allPerson = new Set<number>([0, firstPerson]);

  for (let i = 0; i < len; i++) {
    const [x, y, time] = meetings[i];

    if (allPerson.has(x)) {
      allPerson.add(y);
    }
    if (allPerson.has(y)) {
      allPerson.add(x);
    }
  }

  return [...allPerson].sort();
}

// 超时
function findAllPeople2(
  n: number,
  meetings: number[][],
  firstPerson: number
): number[] {
  // 按时间分组会议
  const meetingsByTime = new Map<number, number[][]>();
  for (const meeting of meetings) {
    const time = meeting[2];
    if (!meetingsByTime.has(time)) {
      meetingsByTime.set(time, []);
    }
    meetingsByTime.get(time)!.push(meeting);
  }

  // 按时间排序
  const sortedTimes = Array.from(meetingsByTime.keys()).sort((a, b) => a - b);

  // 已知秘密的人集合
  const knowsSecret = new Set<number>([0, firstPerson]);

  // 按时间顺序处理
  for (const time of sortedTimes) {
    const meetingsAtTime = meetingsByTime.get(time)!;

    // 构建该时刻的图
    const graph: number[][] = Array(n)
      .fill(0)
      .map(() => []);
    for (const [x, y] of meetingsAtTime) {
      graph[x].push(y);
      graph[y].push(x);
    }

    // 使用 BFS 找出所有从已知秘密者可达的节点
    const visited = new Set<number>();
    const queue: number[] = [];

    // 将所有已知秘密的人加入队列
    for (const person of knowsSecret) {
      if (!visited.has(person)) {
        queue.push(person);
        visited.add(person);
      }
    }

    // BFS 遍历
    while (queue.length > 0) {
      const current = queue.shift()!;
      for (const neighbor of graph[current]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          knowsSecret.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }

  return Array.from(knowsSecret).sort((a, b) => a - b);
}

// 可改写成标准的 graph bfs 写法
function findAllPeople3(
  n: number,
  meetings: number[][],
  firstPerson: number
): number[] {
  const vis: boolean[] = Array(n).fill(false);
  vis[0] = true;
  vis[firstPerson] = true;

  meetings.sort((x, y) => x[2] - y[2]);

  for (let i = 0, m = meetings.length; i < m; ) {
    let j = i;
    while (j + 1 < m && meetings[j + 1][2] === meetings[i][2]) {
      ++j;
    }

    const g = new Map<number, number[]>();
    const s = new Set<number>();

    for (let k = i; k <= j; ++k) {
      const x = meetings[k][0];
      const y = meetings[k][1];

      if (!g.has(x)) g.set(x, []);
      if (!g.has(y)) g.set(y, []);

      g.get(x)!.push(y);
      g.get(y)!.push(x);

      s.add(x);
      s.add(y);
    }

    const q: number[] = [];
    for (const u of s) {
      if (vis[u]) {
        q.push(u);
      }
    }

    for (const u of q) {
      for (const v of g.get(u)!) {
        if (!vis[v]) {
          vis[v] = true;
          q.push(v);
        }
      }
    }

    i = j + 1;
  }

  const ans: number[] = [];
  for (let i = 0; i < n; ++i) {
    if (vis[i]) {
      ans.push(i);
    }
  }
  return ans;
}
