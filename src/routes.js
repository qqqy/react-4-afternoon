import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home.js'
import About from './components/About/About.js'
import ClassList from './components/ClassList/ClassList'

export default (
  <Switch>
    <Route component={Home} path="/" exact />
    <Route component={About} path="/about" />
    <Route component={ClassList} path="/classlist/:class" />
  </Switch>
)