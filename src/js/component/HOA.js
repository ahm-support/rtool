/**
 * Created by RBhatnagar on 3/27/2018.
 */

"use strict";

import React from 'react';
import {Navbar, NavItem, NavbarBrand, Nav, NavDropdown, MenuItem,  } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './HOA.css';
import Facts from '../component/facts/index';
import {XYPlot, LineSeries} from 'react-vis';

export default class HOA extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        console.log('Hello Rajeev');

        fetch("https://student-example-api.herokuapp.com/v1/facts",
            {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(response => response.json()).then( json =>
            this.setState ({
                data: json.facts
            })
        )
    }

    componentDidCatch(error, info){
        console.log("Error: ", error);
    }

    render(){

        return(
            <div>
                <Facts facts={this.state.data} />
            </div>
        )
    }
}