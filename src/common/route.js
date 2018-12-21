/**
 * Created by RBhatnagar on 3/30/2018.
 */

"use strict";

import News from '../js/component/News';
import Member from '../js/component/Member';
import Home from '../js/component/Home';
import ServiceMain from '../js/component/ServiceMain';
import About from '../js/component/About';
import MemberDelegate from '../js/component/MemberDelegate';
import HealthCheck from '../js/component/HealthCheck';
import App from '../js/App.jsx';

const routes = [
    { path: '/', exact:true, component:Home },
    { path: '/about', component:About },
    { path: '/member',  component:Member },
    { path: '/service',  component:ServiceMain },
    { path: '/news',  component:News },
    { path: '/memberDetails',  component:MemberDelegate },
    { path: '/healthCheck',  component:HealthCheck }
];


export default routes;
