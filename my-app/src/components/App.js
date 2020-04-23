import React from "react";
import LinkList from "./LinkList";
import CreateLink from './CreateLink'
import Header from './Header'
import { Switch, Route } from 'react-router-dom'

import "./app.css";

 function App() {
    return (
    <div className="super-container">
      <Header />
      <div className="main-content">
        <Switch>
          <Route exact path="/" component={LinkList} />
          <Route exact path="/create" component={CreateLink} />
        </Switch>
      </div>
    </div>
)
 }



export default App

		