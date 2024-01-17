import React, { useState } from "react";
import { Button, ButtonGroup } from "@shopify/polaris";

interface StopWatchButtonProps {
  displayTime: (currentTime: number) => void;
}
export default function StopWatchButton({ displayTime }: StopWatchButtonProps) {
  const [currentTime, setCurrentTime] = useState(0);
  const [currentLapCount, setLapCount] = useState(false);
  const [startStop, setStartStop] = useState("Start");
  var interval: any;

  const editTime = () => {
    if (startStop === "Start") {
      setStartStop("Stop");
      interval = setInterval(() => {
        setCurrentTime((prevcurrentTime) => prevcurrentTime + 1);
        displayTime(currentTime);
      }, 1000);
    } else {
      console.log("here");
      setStartStop("Stop");
      clearInterval(interval);
    }
  };

  const resetTime = () => {};
  const addLap = () => {};

  return (
    <ButtonGroup variant="segmented">
      {/* Buttons for the stopwatch   */}
      <Button onClick={editTime}>{startStop}</Button>
      <Button onClick={resetTime}>Reset</Button>
      <Button onClick={addLap}>Lap</Button>
    </ButtonGroup>
  );
}
