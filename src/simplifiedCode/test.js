async function async1() {
  console.log('async1 start');
  await async2();
  setTimeout(function() {
      console.log('setTimeout1')  // 这一部分代码会放入到 promise 的微任务队列中。
  },0)
}
async function async2() {
  setTimeout(function() {
      console.log('setTimeout2')
      new Promise(function(resolve) {
        console.log('promise11');
        resolve();
      }).then(function() {
        console.log('promise12');
      });
  },0)
}
console.log('script start');
setTimeout(function() {
  console.log('setTimeout3');


}, 0)
async1();
new Promise(function(resolve) {
  console.log('promise1');
  resolve();
}).then(function() {
  console.log('promise2');
});
console.log('script end');
// script start, async1 start, promise1, script end, promise2, setTimeout3,  setTimeout2, setTimeout1