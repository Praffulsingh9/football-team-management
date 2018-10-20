import React from 'react';
import Layout from './Hoc/Layout';
import { Switch, Route }  from 'react-router-dom';

import Home from './components/home';
import SignIn from './components/signIn/index';

import Dashboard from './components/admin/Dashboard';

import PrivateRoute from './components/authRoutes/privateRoutes';
import PublicRoute from './components/authRoutes/publicRoutes';

import AdminMatches from './components/admin/matches/Index';
import AddEditMatch from './components/admin/matches/addEditMatch';

import AdminPlayers from './components/admin/players/index';
import AddEditPlayers from './components/admin/players/addEditPlayers';

import TheTeam from './components/theTeam/index';
import TheMatches from './components/theMatches/index';
const Routes = (props) => {
  return(
    <Layout>
        <Switch>
            <PrivateRoute {...props} exact component={AddEditPlayers} path="/admin_players/add_players"/>
            <PrivateRoute {...props} exact component={AddEditPlayers} path="/admin_players/add_players/:id"/>
            <PrivateRoute {...props} exact component={AdminPlayers} path="/admin_players"/>
            <PrivateRoute {...props} exact component={AddEditMatch} path="/admin_matches/edit_match"/>
            <PrivateRoute {...props} exact component={AddEditMatch} path="/admin_matches/edit_match/:id"/>
            <PrivateRoute {...props} exact component={AdminMatches} path="/admin_matches"/>
            <PrivateRoute {...props} exact component={Dashboard} path="/dashboard"/>
            <PublicRoute {...props} restricted={false} exact component={TheMatches} path="/the_matches"/>
            <PublicRoute {...props} restricted={true} exact component={SignIn} path="/sign_in"/>       
            <PublicRoute {...props} restricted={false} exact component={TheTeam} path="/team"/>
            <PublicRoute {...props} restricted={false} exact component={Home} path="/"/>   
            
            
        </Switch>
    </Layout>
  )
}

export default Routes;
