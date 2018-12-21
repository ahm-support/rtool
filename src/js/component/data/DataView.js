/**
 * Created by RBhatnagar on 3/16/2018.
 */
'use strict';

import React from 'react';
import { Table, Grid, Col, Row } from 'react-bootstrap';
import ReactJson from 'react-json-viewer';
import { Link } from 'react-router-dom';
import '../data/DataView.css';


export default function DataView(props) {
    var data = [];
    data = props.res;
    console.log(props.res);
    var componentName = props.componentName;
    console.log(props.componentName);
    //console.log("Rajeev1 Here...", props.res);

    if (componentName == "monitoredEvents") {
        return (
            <div id="gridView">
                <span><b>RECOMMENDED HEALTH ACTIONS</b></span>
                <ReactJson json={data.recommendha} /> <br />
                {/* <Grid>
                <Row></Row>
                <Row>              
                <Col><ReactJson json={data}/></Col>                
                </Row>

            </Grid> */}
                <span><b>PAST HEALTH ACTIONS</b></span> <br />
                <ReactJson json={data.pasthealthaction} />
            </div>
        )
    }
    else if (componentName == "healthAssessments") {
        return (
            <div id="gridView">
                <span><b>HRAMEMBERSURVEY</b></span>
                <ReactJson json={data.HRAMEMBERSURVEY} /> <br />
                <span><b>HRA MEMBER SURVEY RESPONSE</b></span> <br />
                <ReactJson json={data.HRAMEMBERSURVEYRESPONSE} /> <br />
                <span><b>HRA MEMBER SURVEY RESPONSE HIST</b></span> <br />
                <ReactJson json={data.HRAMEMBERSURVEYRESPONSEHIST} /> <br /></div >)
    }
    else {
        return (
            <div id="gridView">
                <ReactJson json={data} />
            </div>)
    }
}