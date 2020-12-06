/**
 * 346. Moving Average from Data Stream
 * Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.
 *
 * Example:
 *  MovingAverage m = new MovingAverage(3);
 *  m.next(1) = 1
 *  m.next(10) = (1 + 10) / 2
 *  m.next(3) = (1 + 10 + 3) / 3
 *  m.next(5) = (10 + 3 + 5) / 3
 */

// ES6 answer
// export class MovingAverage {
//   constructor(size) {
//     this.size = size;
//     this.queue = [];
//     this.res = 0;
//   }

//   next(val) {
//     this.queue.push(val);
//     if (this.queue.length > this.size) {
//       this.res -= this.queue.shift();
//     }
//     this.res += val;
//     return this.res / this.queue.length;
//   }
// }

// JS solution
const movingAverageJs = {
  size: 0,
  queue: [],
  res: 0,
  next(val) {
    this.queue.push(val);
    if (this.queue.length > this.size) {
      this.res -= this.queue.shift();
    }
    this.res += val;
    return this.res / this.queue.length;
  },
};

export default movingAverageJs;
