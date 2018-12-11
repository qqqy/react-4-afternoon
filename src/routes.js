import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home.js'
import About from './components/About/About.js'
import ClassList from './components/ClassList/ClassList'
import Student from './components/Student/Student'

export default (
  <Switch>
    <Route component={Home} path="/" exact />
    <Route component={About} path="/about" />
    <Route component={Student} path="/student/:student" />
    <Route component={ClassList} path="/classlist/:class" />
  </Switch>
)