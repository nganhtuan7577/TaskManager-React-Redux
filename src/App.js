import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import routes from './routes';

const MenuLink = ({label, to, activeOnlyWhenExact}) => {
    return (
        <Route  path={to}
                exact={activeOnlyWhenExact}
                children={({match}) => {
                    return (
                        <li className={match ? 'active': ''}>
                            <Link to={to}>{label}</Link>
                        </li>
                    );
                }}
        />
    );
}
  
class App extends Component {
    showContentMenu = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route  key={index}
                            path={route.path} 
                            exact={route.exact}
                            component={route.main}/>
                );
            })
        }
        return result;
    }

    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <Link to='/' className="navbar-brand">Task Manager</Link>
                            </div>
                            <ul className="nav navbar-nav">
                                <MenuLink label='Home' to='/home' />
                                <MenuLink label='About' to='/about'/>
                                <MenuLink label='Contact' to='/contact'/>
                            </ul>
                        </div>
                    </nav>

                    <Switch>
                        {this.showContentMenu(routes)}
                    </Switch>
                </div>
            </Router>
        )
    }
    
}

const mapStateToProps = state => {
    return {
       
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);