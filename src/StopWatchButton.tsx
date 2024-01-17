import React, { useState } from "react";

export default function StopWatchButton() {
    function editTime(){

    }

    function resetTime(){

    }

  return (
    <div>
      {/* Buttons for the stopwatch   */}
      <button onClick={editTime}>Start</button>
      <button>Reset</button>
      <button onClick={resetTime}>Lap</button>
    </div>
  );
}
