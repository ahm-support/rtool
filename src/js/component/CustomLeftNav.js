/**
 * Created by RBhatnagar on 3/29/2018.
 */

"use strict";

import React from 'react';
import '../../css/CustomLeftNav.css';
import Frame from 'react-frame-component';

import {Sidebar, SidebarItem, Link} from 'react-router-dom';
import Member from '../component/Member';


export default class CustomLeftNav extends React.Component {
    render(){

        const Header = ({ children }) => (
            <Frame>
                <h1>{children}</h1>
            </Frame>
        );
        return(
            <div>
                <ul>
                    <li><Link to={"member"}>GetMemberHeartDetails</Link></li>
                    <li><Link to={"home"}>GetBehaviorQuestions</Link></li>
                    <li><Link to={"news"}>GetMemberResponsesByMemberCeid</Link></li>
                    <li><Link to={"about"}>GetMemberAttributesByMemberCeId</Link></li>
                    <li><Link to={"about"}>GetSurveyDetailsByMember</Link></li>
                    <li><Link to={"about"}>MemberMobileGetByMemberCeId</Link></li>
                    <li><Link to={"about"}>LoadUserNameByMemberID</Link></li>
                    <li><Link to={"about"}>MemberGoalGetByMemberAndGoalIdAndInstanceId</Link></li>
                    <li><Link to={"about"}>GetMemberAttributesByMemberCeId</Link></li>
                    <li><Link to={"about"}>GetSurveyDetailsByMember</Link></li>
                    <li><Link to={"about"}>MemberMobileGetByMemberCeId</Link></li>
                    <li><Link to={"about"}>LoadUserNameByMemberID</Link></li>
                    <li><Link to={"about"}>MemberGoalGetByMemberAndGoalIdAndInstanceId</Link></li>
                </ul>
            </div>

        )
    }
}