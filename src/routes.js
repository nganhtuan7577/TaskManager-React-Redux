import React from 'react';

import HomePage from './components/HomePage';
import About from './components/About';
import NotFound from './components/NotFound';
import Contact from './components/Contact';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/home',
        exact: false,
        main: () => <HomePage />
    },
    {
        path: '/about',
        exact: false,
        main: () => <About />
    },
    {
        path: '/contact',
        exact: false,
        main: ({match}) => <Contact match={match}/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }
]

export default routes;