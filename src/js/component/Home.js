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
            memberPlanId: '',
            showSearchMain: false,
            showNavItem: false
        }
    }

    componentDidMount() {
        console.log(this.state.showSearchMain);
        this.changeNavItem(this.props.location.pathname);
        console.log(this.props.location.pathname);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.location.pathname !== nextProps.location.pathname) {
            this.changeNavItem(nextProps.location.pathname);
        }
    }
    componentDidUpdate() {
        console.log('Changed showSearchMain value');
        console.log(this.state.showSearchMain);
    };

    handleSubmit(e) {
        const mId = this.state.memberPlanId;
        e.preventDefault();
        this.setState({ showSearchMain: true });
        this.props.history.push('/member', this.mId);
    };

    changeNavItem(currentRoute) {
        if (currentRoute != "/member") {
            this.setState({ showNavItem: true });
        }
        else {
            this.setState({ showNavItem: false });
        }

    }
    render() {
        console.log('Inside Home!!');
        const isVisible = this.state.showNavItem;
        return (
            <div>
                <Grid>
                    <Row><NavBar isVisible={isVisible} /></Row>
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