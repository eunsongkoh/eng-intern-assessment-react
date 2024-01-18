import React, { useState } from "react";
import { useEffect } from "react";
import { Button, ButtonGroup } from "@shopify/polaris";

// props to pass into the stop watch button
// allows for communicate with the StopWatch and StopWatchButton files
interface StopWatchButtonProps {
  displayTime: (currentTime: number) => void;
  displayLaps: (currentLaps: number) => void;
}
export default function StopWatchButton({
  displayTime,
  displayLaps,
}: StopWatchButtonProps) {
  // states for laps, timer buttons, and time on the stopwatch
  const [currentTime, setCurrentTime] = useState(0);
  const [currentLapCount, setLapCount] = useState(1);

  const [startStop, setStartStop] = useState(false);
  const [runButton, setrunButton] = useState("Start");

  var intervalID: any;

  // modifies the start/stop button and stops/starts the stopwatch
  const stopwatchRunning = () => {
    setStartStop(!startStop);
    if (startStop === false) {
      setrunButton("Stop");
    } else {
      setrunButton("Start");
    }
  };

  // starts the stopwatch
  useEffect(() => {
    if (startStop) {
      intervalID = setInterval(() => setCurrentTime(currentTime + 1), 1000);
      displayTime(currentTime);
    }

    // pauses the stopwatch
    return () => clearInterval(intervalID);
  }, [startStop, currentTime]);

  // resets the stopwatch
  const resetTime = () => {
    console.log("resetting");
    setCurrentTime(0);
    displayTime(0);
    clearInterval(intervalID);
  };

  // adds to the total lap count
  const addLap = () => {
    setLapCount(currentLapCount + 1);
    displayLaps(currentLapCount);
  };

  return (
    <ButtonGroup variant="segmented">
      {/* Buttons for the stopwatch*/}
      <Button onClick={stopwatchRunning}>{runButton}</Button>
      <Button onClick={resetTime}>Reset</Button>
      <Button onClick={addLap}>Lap</Button>
    </ButtonGroup>
  );
}
