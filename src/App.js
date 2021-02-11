import React from "react";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";

import AppRouter from './config/router'

const App = () => {
  return (
    <div>
        <AppRouter/>
    </div>
  );
}

export default App;
