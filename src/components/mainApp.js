import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signup from './containers/Auth/Signup';
import Activate from './containers/Auth/Activate';
import ResetPassword from './containers/Auth/ResetPassword';
import ResetPasswordConfirm from './containers/Auth/ResetPasswordConfirm';
import Google from './containers/Auth/Google';
import Home from './containers/Pages/Home';
import Layout from 'util/Layout'

const MainApp = () => (
        <BrowserRouter>
              <Layout>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/signup' component={Signup} />
                    <Route exact path='/google' component={Google} />
                    <Route exact path='/reset-password' component={ResetPassword} />
                    <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
                    <Route exact path='/activate/:uid/:token' component={Activate} />
                </Switch>
                </Layout>
        </BrowserRouter>
);

export default MainApp;