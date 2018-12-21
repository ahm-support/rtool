"use strict";


import 'babel-polyfill';
require('es6-promise').polyfill();
import React from 'react';
const _ = require('lodash');
import Facts from './data/DataView';
import { returnData, setData, returnJson } from '../../common/helper';

export default class HealthCheck extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            result: []
        }
    }

    componentWillMount() {
        console.log('In Health Check componentWillMount');
        this.callApi();
    }

    componentWillReceiveProps() { }

    callApi() {
        console.log('In Health Check callApi');
        const restURL = 'https://apih2.aetna.com/ahm/prod/admin/helloworld';
        returnData('fetchData', restURL).then((data) => this.setState({ result: data }));
    }


    render() {
        console.log('In Health Check');
        const componentName = 'HealthCheck';
        return (

            <div id="serviceMainGrid">
                <hr />
                <Facts res={this.state.result} className="body" componentName={componentName} />
            </div>


        )
    }
}