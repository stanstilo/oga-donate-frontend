import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signup from './containers/auth/Signup';
import ResetPassword from './containers/auth/ResetPassword';
import ResetPasswordConfirm from './containers/auth/ResetPasswordConfirm';
import Google from './containers/auth/Google';
import Home from './containers/pages/Home';
import Layout from 'util/Layout'
import About from 'components/containers/pages/About'

const MainApp = () => (
        <BrowserRouter>
              <Layout>
                <Switch>
                     <Route path='/about' component = {About} />
                    <Route exact path='/' component={Home} />
                    <Route exact path='/signup' component={Signup} />
                    <Route exact path='/google' component={Google} />
                    <Route exact path='/reset-password' component={ResetPassword} />
                    <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
                
                </Switch>
                </Layout>
        </BrowserRouter>
);

export default MainApp;