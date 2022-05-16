export function merge(intervals: number[][]): number[][] {
  const merged:number[][] = []
  intervals.sort((a, b) => a[0] - b[0])

  for(let i=0; i<intervals.length; i++) {
      if(i === 0) {
          merged.push(intervals[i])
      } else {
          if(intervals[i][0] <= merged[merged.length-1][1]) {
              if(intervals[i][1] > merged[merged.length-1][1]) {
                  merged[merged.length-1][1] = intervals[i][1]
              }
          } else {
              merged.push(intervals[i])
          }
      }
  }


  return merged
}


export function insert(intervals: number[][], newInterval: number[]) {
  let left = newInterval[0];
  let right = newInterval[1];
  let placed = false;
  const ansList: number[][] = [];
  for (let i=0; i<intervals.length; i++) {
    const interval = intervals[i]
    if (interval[0] > right) {
        // 在插入区间的右侧且无交集
        if (!placed) {
            ansList.push([left, right]);
            placed = true;                    
        }
        ansList.push(interval);
    } else if (interval[1] < left) {
        // 在插入区间的左侧且无交集
        ansList.push(interval);
    } else {
        // 与插入区间有交集，计算它们的并集
        left = Math.min(left, interval[0]);
        right = Math.max(right, interval[1]);
    }
  }
  if (!placed) {
      ansList.push([left, right]);
  }
  return ansList;
}