/**
 * 项目组共有N个开发人员，项目经理接到了M个独立的需求，每个需求的工作量不同，且每个需求只能由一个开发人员独立完成，不能多人合作。

假定各个需求直接无任何先后依赖关系，请设计算法帮助项目经理进行工作安排，使整个项目能用最少的时间交付。
 */
class Developer {
  workload: number;

  constructor() {
    this.workload = 0;
  }
}

function scheduleTasks(numDevelopers: number, taskWorkloads: number[]): number {
  const developers: Developer[] = Array.from(
    { length: numDevelopers },
    () => new Developer()
  );

  // Sort the task workloads in descending order for optimal allocation
  taskWorkloads.sort((a, b) => b - a);

  for (const workload of taskWorkloads) {
    // Find the developer with the least workload
    let minIndex = 0;
    for (let i = 1; i < developers.length; i++) {
      if (developers[i].workload < developers[minIndex].workload) {
        minIndex = i;
      }
    }
    // Assign the task to the developer with the least workload
    developers[minIndex].workload += workload;
  }

  // The time to complete all tasks is the maximum workload among all developers
  return Math.max(...developers.map((dev) => dev.workload));
}

// Example usage
const numDevelopers = 3;
const taskWorkloads = [4, 2, 7, 1, 5];
const minimumCompletionTime = scheduleTasks(numDevelopers, taskWorkloads);
console.log(`Minimum completion time: ${minimumCompletionTime}`);
