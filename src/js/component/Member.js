/**
 * Created by RBhatnagar on 3/27/2018.
 */

"use strict";

import 'babel-polyfill';
require('es6-promise').polyfill();
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, NavbarBrand, Nav, NavDropdown, MenuItem, Grid, Col, Row, Glyphicon } from 'react-bootstrap';
//import './HOA.css';
import Facts from './data/DataView';
import Config from '../../common/config.json';
import { returnData, setData, returnJson } from '../../common/helper';
import '../component/Member.css';
import Collapsible from 'react-collapsible';
import Test from '../component/test.js'


export default class Member extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            result: [],
            showSearchMain: true
        }
    }

    componentWillMount() {
        this.callApi(history.state.state);
    }

    componentWillReceiveProps(nextProps) {

        if (this.props.location.state != nextProps.location.state) {
            console.log(this.props.location.state + "Next" + nextProps.location.state);
            this.callApi(nextProps.location.state);
        }
    }

    componentDidCatch(error, info) {
        console.log("Error: ", error);
    }

    callApi(memberPlanId) {
        this.setState({ showSearchMain: true })
        console.log(this.state);
        //const restURL = `http://${Config.hostUrl}:${Config.port}${Config.mahServices.member}?app-id=${Config.appId}&q=${memberPlanId}`;
        //returnData('fetchData', restURL).then((data) => this.setState({result: data}));
        returnJson("MemberDetails").then((data) => this.setState({ result: data }));
    }

    render() {
        return (

            <div id="mainGrid">
                <div className="nestedGrid">
                    <span><b>MEMBERDETAILS</b></span>
                    <Facts res={this.state.result.memberInfo} className="body" />
                </div>

                <br />
                <div className="nestedGrid">
                    <span><b>MEMBERSHIP INFO</b></span>
                    <Facts res={this.state.result.membershipInfo} className="body" /></div>
                <br />

                <Collapsible trigger={
                    <div>
                        <span><b>DEPENDENT INFO</b></span>
                        <span className="glyphicon glyphicon-chevron-down" ></span>
                    </div>} className="nestedGrid" >

                    <Facts res={this.state.result.dependentInfo} className="body" />

                </Collapsible>
                <br />
                <Collapsible trigger={
                    <div>
                        <span><b>ENROLLMENT</b></span>
                        <span className="glyphicon glyphicon-chevron-down" ></span>
                    </div>} className="nestedGrid" >

                    <Facts res={this.state.result.Enrollment} className="body" />

                </Collapsible>

                {/* <div className="nestedGrid">
                    <span><b>DEPENDENT INFO</b></span>
                    <Facts res={this.state.result.dependentInfo} className="body" /></div>
                <br />
                <div className="nestedGrid">
                    <span><b>ENROLLMENT</b></span>
                    <Facts res={this.state.result.Enrollment} className="body" /></div>
                <br /> */}
                <Grid><Col md="10"></Col>
                    <Col>
                        <Link to={{ pathname: "memberDetails", state: this.state }}>Member Details
                        </Link></Col>
                </Grid>
            </div>
        )
    }
}
//const restURL = "http://localhost:4001/ahm/health-assessments?app-id=testing&q=1720874840";