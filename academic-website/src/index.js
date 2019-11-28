import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import Home from './components/home'
import HomeAdmin from './components/home-admin'
import Login from './components/login'
import Dados from './components/dados'
import Contato from './components/contato'

//SITE
import './assets/css/bootstrap.css';
import './assets/vendors/linericon/style.css';
import './assets/css/font-awesome.min.css';
import './assets/vendors/owl-carousel/owl.carousel.min.css';
import './assets/vendors/lightbox/simpleLightbox.css';
import './assets/vendors/nice-select/css/nice-select.css';
import './assets/vendors/animate-css/animate.css';
import './assets/vendors/flaticon/flaticon.css';
import './assets/css/style.css';
import './assets/css/responsive.css';

import { isAuthenticated } from './services/auth'
//ADMIN1
//import './assets/js/plugin/webfont/webfont.min.js';
//import './assets/css/atlantis.min.css';
//import './assets/css/demo.css';
const PrivateRoute = ({ component: Component }) => (
    <Route
        render={props => isAuthenticated() === true ? (
            <Component {...props} />
        ) : (
                <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
            )}
    />
)


ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dados" component={Dados} />
            <Route path="/contato" component={Contato} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/admin/" component={HomeAdmin} />
        </Switch>
    </HashRouter>
    , document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
