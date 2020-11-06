import React from 'react';
import {
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";

import { HomePage, HWPage } from "./pages";

export default function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/"><HomePage /></Route>
        <Route exact path="/:no"><HWPage /></Route>
      </Switch>
    </HashRouter>
  );
}
