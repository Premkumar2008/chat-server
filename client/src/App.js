import React, { Component } from 'react';

import { BrowserRouter as Router,Route } from 'react-router-dom';

import Join from './components/Join';
import Room from './components/Room';

const App = () => {
    return(
    <Router>
    <Route path="/" exact component={Join} />
    <Route path="/room" component={Room} />
    </Router>
    )
};

export default App;