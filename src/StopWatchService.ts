// A services file for maintaining the functionality of the StopWatch
/**
 * TODO:
 * - Start/Stop/Reset function to keep track of the time
 * - Lap logging
 */

// a StopWatchService class to maintain all the functional implementations of the StopWatch
// created to maintain modularity
export class StopWatchService {
  time: number;
  laps: number;

  // initializes the time as 0
  constructor() {
    this.time = 0;
    this.laps = 0;
  }

  // incraments the time by 1 second
  editTime() {
    this.time++;
  }

  // returns the current time
  getTime() {
    return this.time;
  }

  // resets the time back to 0
  resetTime() {
    this.time = 0;
  }

  logLap() {
    this.laps++;
  }
}
