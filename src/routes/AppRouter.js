import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { HeroesScreen } from '../components/heroes/HeroesScreen';
import { HomeScreen } from '../components/home/HomeScreen';


export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/home" exact component={HomeScreen} />
          <Route path="/hero" exact component={HeroesScreen} />
          <Redirect to= "/home" />
        </Switch>
      </div>
    </Router>
  )
}
