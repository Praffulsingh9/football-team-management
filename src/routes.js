import React from 'react';
import Layout from './Hoc/Layout';
import {Route,Switch} from 'react-router-dom';
import Home from './components/home';
const Routes =(props) => {
   return (
     <Layout>
       <Switch>
         <Route  exact path="/" component={Home}/>
       </Switch>
     </Layout>
   );
}

export default Routes;
