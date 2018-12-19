/**
 * Created by RBhatnagar on 4/6/2018.
 */
"use strict";

import React from 'react';

import {BrowserRouter as Router, Route } from 'react-router-dom';
import CustomNavbar from './CustomNavbar';
import CustomLeftNav from './CustomLeftNav';

import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';

export default class ActiveHealthHome extends React.Component
{
    render(){
        return(
            <div >
                <Grid>
                    <Row>
                        <Col md={4}>
                            <div className="row row-block">
                                <CustomLeftNav/>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}