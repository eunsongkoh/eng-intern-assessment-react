import React from "react";
import StopWatchButton from "./StopWatchButton";
import { useState, useEffect } from "react";
import { Page, Text } from "@shopify/polaris";

/*
TODO: 
- should start counting when the user clicks the start button 
- should stop counting when the use clicks the stop button 
*/
export default function StopWatch() {
  const [time, setTime] = useState(0);

  const updateTime = (currentTime: number) => {
    setTime(currentTime);
    console.log(time);
  };

  return (
    <Page>
      <Text variant="heading3xl" as="h2">
        {time}
      </Text>
      <br />
      <span>Laps Logged</span>
      <StopWatchButton displayTime={updateTime} />
    </Page>
  );
}
