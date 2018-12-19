'use strict';

import React from 'react';
import '../css/App.css';

import {BrowserRouter as Router, Route } from 'react-router-dom';
import routes from '../common/route';

class App extends React.Component {

    componentDidUpdate() {
        console.log(' From App***');        
        console.log(this.state.SearchMain);
    };

    render(){
        console.log("Inside the App render() function");
        return(
            <Router>
                <div >
                    {routes.map((route) => ( <Route key={route.path} path={route.path} component={route.component} /> ))}
                </div>
            </Router>
           )
       }
}

export default App;

