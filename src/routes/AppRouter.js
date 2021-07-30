import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { HomeScreen } from '../components/home/HomeScreen';


export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/home" exact component={HomeScreen} />
          <Redirect to= "/home" />
        </Switch>
      </div>
    </Router>
  )
}
