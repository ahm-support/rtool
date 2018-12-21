/**
 * Created by rbhatnagar on 4/18/2018.
 */

"use restrict";

import React from 'react';
import { Navbar, NavItem, NavbarBrand, Image, Nav, NavDropdown, MenuItem, Grid, Col, Row, FormGroup, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../css/CustomNavbar.css';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showNavItem: false
        }
    }
    componentWillMount() { }

    componentDidMount() {
        console.log(this.state.memberPlanId);
    }

    componentWillReceiveProps(nextProps) {
    }
    render() {
        return (
            // <Navbar>
            //     <div class="collapse navbar-collapse" id="navbarNav">
            //         <ul class="navbar-nav">
            //             <li class="nav-item active">
            //                 <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            //             </li>
            //             <li class="nav-item">
            //                 <a class="nav-link" href="#">Health Assessment</a>
            //             </li>
            //             <li class="nav-item">
            //                 <a class="nav-link" href="#">Health Action</a>
            //             </li>
            //             <li class="nav-item">
            //                 <a class="nav-link" href="#">Digital Coaching</a>
            //             </li>
            //         </ul>
            //     </div>
            // </Navbar>
            // <Nav  bsStyle="tabs" >

            //     <NavItem eventKey="1" href="/home"> HOME </NavItem>
            //     <NavItem eventKey="1" href="/home"> HEALTH ASSESSMENT </NavItem>
            //     <NavItem eventKey="1" href="/home"> HEALTH ACTION </NavItem>
            //     <NavItem eventKey="1" href="/home"> DIGITAL COACHING </NavItem>
            //     {/* <a href="#home"><Link to="/home"><h2>HOME</h2></Link></a>
            //             <a href="#home"><Link to="/home"><h2>HEALTH ASSESSMENT</h2></Link></a>
            //             <a href="#home"><Link to="/home"><h2>HEALTH ACTION</h2></Link></a>
            //             <a href="#home"><Link to="/home"><h2>DIGITAL COACHING</h2></Link></a> */}

            // </Nav>
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand >
                        <NavItem eventKey={1} href={"home"}>
                            Home
                     </NavItem>
                    </Navbar.Brand>
                    <Navbar.Brand > {!this.props.isVisible &&
                        <NavItem eventKey={2}><Link to={{ pathname: '/service', state: { memberPlanId: this.props.memberPlanId, name: 'healthAssessments' } }}>
                            Health Assessment</Link>
                        </NavItem>}
                    </Navbar.Brand>
                    <Navbar.Brand > {!this.props.isVisible &&
                        <NavItem eventKey={3}><Link to={{ pathname: '/service', state: { memberPlanId: this.props.memberPlanId, name: 'monitoredEvents' } }}>
                            Health Action</Link>
                        </NavItem>}
                    </Navbar.Brand>
                    <Navbar.Brand > {!this.props.isVisible &&
                        <NavItem eventKey={4} href={"about"}>
                            Digital Coaching
                     </NavItem>}
                    </Navbar.Brand>

                    <Navbar.Brand >{this.props.isVisible &&
                        <NavItem eventKey={5} href={"about"}>
                            About
                     </NavItem>}
                    </Navbar.Brand>
                    <Navbar.Brand>{this.props.isVisible &&
                        <NavDropdown eventKey={7} title="Environment" >
                            <MenuItem eventKey={7.1} href={"about"}>Prod</MenuItem>
                            <MenuItem eventKey={7.2} href={"about"}>Cert</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={7.3} href={"about"}>Dev</MenuItem>
                        </NavDropdown>}
                    </Navbar.Brand>
                    <Navbar.Brand > {this.props.isVisible &&
                        <NavItem eventKey={8}>
                            <Link to={{ pathname: '/healthCheck', state: { memberPlanId: this.props.memberPlanId, name: 'HealthCheck' } }}>
                                Health Check </Link>

                        </NavItem>}
                    </Navbar.Brand>
                </Navbar.Header>
                {/* <Nav pullRight>
                    <NavItem eventKey={1} href={"about"}>
                        About
                     </NavItem>
                    <NavItem eventKey={2} href={"news"}>
                        News
                     </NavItem>
                    <NavDropdown eventKey={3} title="Environment" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1} href={"about"}>Prod</MenuItem>
                        <MenuItem eventKey={3.2} href={"about"}>Cert</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3} href={"about"}>Dev</MenuItem>
                    </NavDropdown>
                </Nav> */}
            </Navbar>
        )
    }
}
