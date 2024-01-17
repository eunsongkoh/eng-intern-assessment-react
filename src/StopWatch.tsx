import React from "react";

/*
TODO: 
- should start counting when the user clicks the start button 
- should stop counting when the use clicks the stop button 
*/
import StopWatchButton from "./StopWatchButton";
export default function StopWatch() {
  return (
    <div>
      <span>TIME</span>
      <br />
      <span>Laps Logged</span>
      <StopWatchButton />
    </div>
  );
}
