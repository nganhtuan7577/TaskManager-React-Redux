import React, {Component} from 'react';
import {connect} from 'react-redux';
import Cookies from 'universal-cookie';
import APICaller from '../utils/APICaller';

var cookies = new Cookies();

class Login extends Component {

    onLogin = () => {
        APICaller('login','POST',null).then(res => {
            console.log('Login', res);
            cookies.set('Token', res.data);
        })
    }

    render() {
        return (
            <React.Fragment>
                <h3>Login</h3>
                <button onClick={this.onLogin}>Login</button>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);