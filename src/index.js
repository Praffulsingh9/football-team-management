import React from 'react';
import {render} from 'react-dom';
import './Resources/css/app.css';
import Routes from './routes';
import {BrowserRouter} from "react-router-dom";

const App = () => {
    return(
    <BrowserRouter>
     <Routes/>
    </BrowserRouter>
    );
    
}



render(<App/>, document.getElementById('root'));

