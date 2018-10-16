import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Route, Link} from "react-router-dom";

const menus = [
    {
        name: 'Home',
        to: '/',
        exact: true
    },
    {
        name: 'About',
        to: '/about',
        exact: false
    },
    {
        name: 'Contact',
        to: '/contact',
        exact: false
    }
]

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
  
class Menu extends Component {
    showMenu = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink key={index} label={menu.name} to={menu.to} exact={menu.exact}/>
                );     
            })
        }
        
        return result;
    }

    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link exact activeClassName='active' to='/' className="navbar-brand">Task Manager</Link>
                    </div>
                    <ul className="nav navbar-nav">
                        {this.showMenu(menus)}
                    </ul>
                </div>
            </nav>
        )
    }
    
}

const mapStateToProps = state => {
    return {
        isLogin: state.logInOut
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);