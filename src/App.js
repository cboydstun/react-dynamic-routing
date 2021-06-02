import React from 'react'
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";

import Home from './components/Home'
import Nav from './components/Nav'
import About from './components/About'
import Coffee from './components/Coffee'
import CoffeeInfo from './components/CoffeeInfo'

export default function App() {
    return (
        <div className="App">
        <Router>
            <Nav />
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Redirect from="/home" to="/" />
                <Route path="/about" component={About}></Route>
                <Route path="/coffee/:type" exact component={Coffee}></Route>
                <Route path="/coffee/:type/:id" component={CoffeeInfo}></Route>
            </Switch>
        </Router>
        </div>
    )
}
