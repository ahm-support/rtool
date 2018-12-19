/**
 * Created by RBhatnagar on 3/29/2018.
 */

"use strict";

import React from 'react';
import '../../css/CustomLeftNav.css';
import Frame from 'react-frame-component';
import {Navbar, NavItem, NavbarBrand, Nav, NavDropdown, MenuItem,Button, Grid,Col,Row, Thumbnail } from 'react-bootstrap';

import {Sidebar, SidebarItem, Link} from 'react-router-dom';
import Member from '../component/Member';



export default class MemberDetails extends React.Component {
    constructor(props){
        super(props)
        const result = history.state.state;
        console.log(history);
        const memberPlanId = result.result.PRIMARYMEMBERPLANID;
        console.log('Inside MemberDetails:: ', memberPlanId);

        this.state = {
            memberPlanId: memberPlanId
        };
    }

    handleClick(e){
        alert('In IN : ' + this.state);
        e.preventDefault();
        this.props.history.push('/service', this.state.memberPlanId);
    }


    render(){

        return(
            <div>
                <hr/>
            <Grid className="container-fluid">
                <Row>
                <Col xs={6} md={2}></Col>
                <Col xs={6} md={3}><h2>Dashboard - </h2>
                    <p>Health Recommendation for member</p>
                </Col>
            </Row>
                <hr/>
                <Row>
                    <Col xs={6} md={2}></Col>
                    <Col xs={6} md={1}>
                        <Thumbnail title="Monitered Events" src="../../../images/clock.png" />
                        <h4><Link to={{pathname: '/service', state: {memberPlanId:this.state.memberPlanId, name: 'monitoredEvents'}}}>Monitered Events</Link></h4>
                        <p>Description</p>
                    </Col>
                    <Col xs={6} md={2}></Col>
                    <Col xs={6} md={1}>
                        <Thumbnail title="HRA" alt="80x80" src="../../../images/Human.png" />
                        <h4><Link to={{pathname: '/service', state: {memberPlanId:this.state.memberPlanId, name: 'healthAssessments'}}}>HRA</Link></h4>
                        <p>Description</p>
                    </Col>
                    <Col xs={6} md={2}></Col>
                    <Col xs={6} md={1}>
                        <Thumbnail title="Heart Balance" alt="80x80" src="../../../images/heart.png" />
                        <h4><Link to={{pathname: '/service', state: {memberPlanId:this.state.memberPlanId, name: 'HBALANCE'}}}>Heart Balance</Link></h4>

                        <p>Description</p>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col xs={6} md={2}></Col>
                    <Col xs={6} md={1}>
                        <Thumbnail title="Incentives" src="../../../images/incentives.png" />
                        <h4><Link to={{pathname: '/service', state: {memberPlanId:this.state.memberPlanId, name: 'INCENTIVE'}}}>Incentives</Link></h4>
                        <p>Description</p>
                    </Col>
                    <Col xs={6} md={2}></Col>
                    <Col xs={6} md={1}>
                        <Thumbnail title="Trackers" alt="80x80" src="../../../images/trackers.png" />
                        <h4><Link to={{pathname: '/service', state: {memberPlanId:this.state.memberPlanId, name: 'TRACKER'}}}>Trackers</Link></h4>
                        <p>Description</p>
                    </Col>
                    <Col xs={6} md={2}></Col>
                    <Col xs={6} md={1}>
                        <Thumbnail title="Sweepstakes" alt="80x80" src="../../../images/sweepstakes.jpg" />
                        <h4><Link to={{pathname: '/service', state: {memberPlanId:this.state.memberPlanId, name: 'SWEEPSTAKES'}}}>Sweepstakes</Link></h4>
                        <p>Description</p>
                    </Col>
                </Row>
            </Grid>
            </div>

        )
    }
}