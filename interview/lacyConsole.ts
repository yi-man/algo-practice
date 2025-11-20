/* eslint-disable @typescript-eslint/no-this-alias */
// Lacy console

interface Task {
  delay: number;
  fn: () => void;
}

class MainClass {
  private tasks: Task[] = [];
  private firstRunningTask: null | Task = null;

  constructor() {
    this.tasks = [];
    this.firstRunningTask = null;

    setTimeout(() => {
      this.autoRun();
    });
  }

  print(s: string) {
    console.log(s);
  }

  autoRun() {
    if (this.firstRunningTask) {
      setTimeout(() => {
        this.firstRunningTask?.fn();

        this.runTask();
      }, this.firstRunningTask.delay * 1000);
    } else {
      this.runTask();
    }
  }

  runTask(cursor = 0) {
    if (cursor >= this.tasks.length) {
      return;
    }

    const task = this.tasks[cursor];

    if (task.delay === 0) {
      task.fn();

      this.runTask(cursor + 1);
    } else {
      setTimeout(() => {
        task.fn();
        this.runTask(cursor + 1);
      }, task.delay * 1000);
    }
  }

  sleep(second: number) {
    const that = this;

    const fn = function () {
      that.print(`等待了${second}秒...`);
    };

    const task: Task = {
      delay: second,
      fn,
    };

    this.tasks.push(task);

    return this;
  }

  eat(l: string) {
    const that = this;

    const task = function () {
      that.print(`I am eating ${l}`);
    };

    this.tasks.push({
      fn: task,
      delay: 0,
    });

    return this;
  }

  sleepFirst(second: number) {
    if (this.firstRunningTask) {
      return this;
    }

    const that = this;

    const fn = function () {
      that.print(`等待了${second}秒...`);
    };

    this.firstRunningTask = {
      fn,
      delay: second,
    };

    return this;
  }
}

function LazyMan(name: string) {
  const instance = new MainClass();

  instance.print(`Hi I am ${name}`);

  return instance;
}

// LazyMan("Tony");
// Hi I am Tony

// LazyMan("Tony").sleep(10).eat("lunch");
// // Hi I am Tony
// // 等待了10秒...
// // I am eating lunch

// LazyMan("Tony").eat("lunch").sleep(10).eat("dinner");
// // Hi I am Tony
// // I am eating lunch
// // 等待了10秒...
// // I am eating diner

LazyMan("Tony")
  .eat("lunch")
  .eat("dinner")
  .sleepFirst(5)
  .sleepFirst(10)
  .sleep(10)
  .eat("junk food");
// // Hi I am Tony
// // 等待了5秒...
// // I am eating lunch
// // I am eating dinner
// // 等待了10秒...
// // I am eating junk food
