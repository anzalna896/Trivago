import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './HomePage';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './theme'
import Cars from './cars'
import Flight from './flights'
import Discover from './discover'
import Terms from  './terms'
import Legal from './legal'
import Calendar from './calendar'
import Login from './login'
import Deals from './deals';

export default function App(){
    return(<BrowserRouter>
    <ThemeProvider theme={theme}>
    <Route exact path="/"><HomePage/></Route>
    <Route path="/cars"><Cars/></Route>
    <Route path="/flight"><Flight/></Route>
    <Route path="/discover"><Discover/></Route>
    <Route path="/terms-of-service"><Terms/></Route>
    <Route path="/login"><Login/></Route>
    <Route path="/legal"><Legal/></Route>
    <Route path="/deals"><Deals/></Route>
    <Route path="/calendar"><Calendar width={500}/></Route>
    </ThemeProvider>
    </BrowserRouter>);
};