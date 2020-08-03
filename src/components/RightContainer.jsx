import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "./Profile";
import Calls from "./Calls";
import VoiceMailGreetings from "./VoiceMailGreetings";
import VoiceMailDrop from "./VoiceMailDrop";
import CallForwarding from "./CallForwarding";
import FullContactDetails from "./FullContactCard";

export default function RightContainer() {
  return (
    <div>
      <Switch>
        <Route exact path="/dashboard/account/profile/">
          <Profile />
        </Route>
        <Route exact path="/dashboard/account/calls/">
          <Calls />
        </Route>
        <Route exact path="/dashboard/account/calls/voicegreetings/">
          <VoiceMailGreetings />
        </Route>
        <Route exact path="/dashboard/account/calls/voicedrop/">
          <VoiceMailDrop />
        </Route>
        <Route exact path="/dashboard/account/calls/callforwarding/">
          <CallForwarding />
        </Route>
        <Route exact path="/dashboard/recents/:contact/:tab/">
          <FullContactDetails />
        </Route>
        <Route exact path="/dashboard/contacts/:org/:contact/:tab/">
          <FullContactDetails />
        </Route>
      </Switch>
    </div>
  );
}
