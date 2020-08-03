import React from "react";
import LeftNavBar from "./LeftNavBar";
import MiddleContainer from "./MiddleContainer";
import RightContainer from "./RightContainer";

export default function Dashboard() {
  return (
    <div className="App">
      <LeftNavBar />
      <MiddleContainer />
      <RightContainer />
    </div>
  );
}
