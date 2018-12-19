"use strict";
import React from 'react';
import Collapsible from 'react-collapsible';
export default class Test extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: []
        }
    }
    render() {
        return (
            <div>
            <span id="left">MemberDetails</span>
            <span id="right" className="glyphicon glyphicon-chevron-down" ></span></div>
        )
    }
}