import React from 'react';
import Layout from './Hoc/Layout';
import { Switch, Route }  from 'react-router-dom';

import Home from './components/home';
import SignIn from './components/signIn/index';

import Dashboard from './components/admin/Dashboard';

import PrivateRoute from './components/authRoutes/privateRoutes';
import PublicRoute from './components/authRoutes/publicRoutes';

import AdminMatches from './components/admin/matches/Index';

const Routes = (props) => {
  return(
    <Layout>
        <Switch>
            <PrivateRoute {...props} exact component={AdminMatches} path="/admin_matches"/>
            <PrivateRoute {...props} exact component={Dashboard} path="/dashboard"/>
            <PublicRoute {...props} restricted={true} exact component={SignIn} path="/sign_in"/>       
            <PublicRoute {...props} restricted={false} exact component={Home} path="/"/>   
            
            
        </Switch>
    </Layout>
  )
}

export default Routes;
