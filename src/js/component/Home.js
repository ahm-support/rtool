'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import CustomNavbar from './CustomNavbar';
import SearchMain from './SearchMain';

import '../../css/Home.css';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import NavBar from "./NavBar";


export default class Home extends React.Component {


    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            showSearchMain: false,
            showNavItem: false,
            memberPlanId: ''
        };
    }

    componentDidMount() {
        this.changeNavItem(this.props.location.pathname);
        console.log(this.props.location.pathname);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.location.pathname !== nextProps.location.pathname) {
            this.changeNavItem(nextProps.location.pathname);

        }
    }
    componentDidUpdate() {
        console.log(this.state.showSearchMain);
        console.log(this.state.showNavItem);
    };

    handleSubmit(e, stat) {
        console.log('From child to Parent');
        // const mId = this.state.memberPlanId;
        const mId = stat.memberPlanId;
        e.preventDefault();
        this.setState({ showSearchMain: true });
        this.setState({ memberPlanId: mId });
        //  console.log(mId);
        //  console.log(this.state.showSearchMain);
        //  console.log(this.state.memberPlanId);
        this.props.history.push('/member', mId);

    };

    changeNavItem(currentRoute) {
        console.log("currentRoute" + currentRoute);
        if (currentRoute == "/service") {
            this.setState({ showNavItem: false });
        }
        else if (currentRoute == "/healthCheck") {
            this.setState({ showNavItem: true });
            this.setState({ showSearchMain: true });
        }
        else if (currentRoute != "/member") {
            this.setState({ showNavItem: true });
        }
        else {
            this.setState({ showNavItem: false });
        }

    }
    render() {
        console.log('Inside Home!!');
        const isVisible = this.state.showNavItem;
        const memberPlanId = this.state.memberPlanId;
        return (
            <div>
                <Grid>
                    <Row><NavBar isVisible={isVisible} memberPlanId={memberPlanId} /></Row>
                    <Row>
                        <hr />
                    </Row>
                    <Row>
                        {!this.state.showSearchMain && <SearchMain handleSubmit={this.handleSubmit} />}
                        {/* <SearchMain /> */}
                    </Row>
                </Grid>
            </div>
        )

    }

}