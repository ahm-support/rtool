/**
 * Created by RBhatnagar on 3/27/2018.
 */

"use strict";

import 'babel-polyfill';
require('es6-promise').polyfill();
import React from 'react';
const _ = require('lodash');
import { Link } from 'react-router-dom';
import { Navbar, NavItem, NavbarBrand, Nav, NavDropdown, MenuItem, Grid, Col, Row } from 'react-bootstrap';
//import './HOA.css';
import Facts from './data/DataView';
import Config from '../../common/config.json';
import { returnData, setData, returnJson } from '../../common/helper';


export default class ServiceMain extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            result: []
        }
    }

    componentWillMount() {
        const memberPlanId = history.state.state.memberPlanId;
        const componentName = history.state.state.name;
        console.log('ServiceMain componentWillMount::', memberPlanId, componentName);
        this.callApi(componentName, memberPlanId);
    }

    componentWillReceiveProps(nextProps) {
        console.log('ServiceMain::', nextProps);

        if (this.props.location.state != nextProps.location.state) {
            console.log(this.props.location.state + "Next" + nextProps.location.state);
            this.callApi(componentName, memberPlanId);
        }
    }

    componentDidCatch(error, info) {
        console.log("Error: ", error);
    }

    callApi(componentName, memberPlanId) {

        // const serviceName = _.get(Config.mahServices, `${componentName}`);
        // const restURL = `http://${Config.hostUrl}:${Config.port}${serviceName}?app-id=${Config.appId}&q=${memberPlanId}`;
        //  returnData('fetchData', restURL).then((data) => this.setState({result: data}));

        //To work with mock json
        console.log("Component name" + componentName);
        returnJson(componentName).then((data) => this.setState({ result: data }));
    }

    render() {
        return (
            <div>
                <hr />
                <Facts res={this.state.result} className="body" />
            </div>
        )
    }
}
//const restURL = "http://localhost:4001/ahm/health-assessments?app-id=testing&q=1720874840";