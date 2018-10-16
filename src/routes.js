import React from 'react';

import HomePage from './components/HomePage';
import About from './components/About';
import NotFound from './components/NotFound';
import Contact from './components/Contact';
import Login from './components/Login';

import {Redirect} from 'react-router-dom';
import Cookies from 'universal-cookie';

var cookies = new Cookies();

const routes = [
    {
        path: '/',
        exact: true,
        main: () => (cookies.get('Token') ? <HomePage /> :<Redirect to='/login' />)
    },
    {
        path: '/home',
        exact: false,
        main: () => (cookies.get('Token') ? <Redirect to='/' /> :<Redirect to='/login' />)
    },
    {
        path: '/about',
        exact: false,
        main: () => <About />
    },
    {
        path: '/contact',
        exact: false,
        main: ({match}) => (cookies.get('Token') ? <Contact match={match}/> :<Redirect to='/login' />)
    },
    {
        path: '/login',
        exact: false,
        main: () => <Login />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }
]

export default routes;