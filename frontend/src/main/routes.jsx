import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'
import Todo from '../todo/todo'
import About from '../about/about'
import Phonebook from '../phonebook/phonebook'

export default props => (
    <Router history={hashHistory}>
        <Route path='/todos' component={Todo} />
        <Route path='/about' component={About} />
        <Route path='/phonebook' component={Phonebook} />
        <Redirect from='*' to='/todos' />
    </Router>
)