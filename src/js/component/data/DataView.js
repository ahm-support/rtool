/**
 * Created by RBhatnagar on 3/16/2018.
 */
'use strict';

import React from 'react';
import {Table, Grid, Col, Row  } from 'react-bootstrap';
import ReactJson from 'react-json-viewer';
import {Link} from 'react-router-dom';
import   '../data/DataView.css';


export default function DataView(props) {
    var data = [];
    data = props.res;
    console.log("Rajeev1 Here...", props.res);
    return (
        <div><ReactJson json={data} />
            {/* <Grid>
                <Row></Row>
                <Row>              
                <Col><ReactJson json={data}/></Col>                
                </Row>

            </Grid> */}
        </div>
    )
}