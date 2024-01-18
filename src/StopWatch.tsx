import React from "react";
import StopWatchButton from "./StopWatchButton";
import { useState, useEffect } from "react";
import { Page, Text } from "@shopify/polaris";

export default function StopWatch() {
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState(0);
  const [activateLaps, setActivateLaps] = useState(false);

  // updates the time of the stopwatch
  const updateTime = (currentTime: number) => {
    setTime(currentTime);
  };

  // updates the laps of the stopwatch
  const updateLaps = (currentLapCount: number) => {
    setLaps(currentLapCount);
    setActivateLaps(true);
  };

  return (
    <Page>
      <Text variant="heading3xl" as="h2">
        {time} (in seconds)
      </Text>
      <br />
      {/* displays the amount of laps once lap is clicked */}
      {activateLaps && <h2>Laps: {laps}</h2>}
      <StopWatchButton displayTime={updateTime} displayLaps={updateLaps} />
    </Page>
  );
}
