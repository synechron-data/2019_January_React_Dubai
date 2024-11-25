import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

import HomeComponent from './home/HomeComponent';

const AboutComponent = Loadable({
    loader: ()=>import('./about/AboutComponent'),
    loading: () => <div>Loading...</div>
});

import ProductsComponent from './products/ProductsComponent';
import AdminComponent from './admin/AdminComponent';

import { authenticator } from './services/auth.service';

import LoginComponent from './login/LoginComponent';

const SecuredRoute = ({ component: Component, ...args }) => {
    return (
        <Route {...args} render={
            props => authenticator.isAuthenticated === true ? <Component {...props} /> :
                <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        } />
    );
}

export default (
    <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/about" component={AboutComponent} />
        <Route path="/products" component={ProductsComponent} />
        <SecuredRoute path="/admin" component={AdminComponent} />
        <Route path="/login" component={LoginComponent} />
        <Route path="**" render={
            () => (
                <article>
                    <h1 className="text-danger">Component Not Found</h1>
                    <p className="text-danger">Route may not be configured...</p>
                </article>
            )
        } />
    </Switch>
);