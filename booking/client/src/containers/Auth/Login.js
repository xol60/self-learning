import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions"
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { handleLoginApi } from '../../services/userService'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleLogin = async () => {
        try {
            const data = await handleLoginApi(
                this.state.email,
                this.state.password
            )
            this.props.userLoginSuccess(data.user)
        } catch (e) {
            if (e.response) {
                if (e.response.data) {
                    alert(e.response.data.message)
                }
            }
        }
    }
    render() {
        // console.log(this.props.userInfo)
        return (
            <div className="container">
                <div className="form-box">
                    <div className="header-form">
                        <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i></h4>
                        <div className="image">
                        </div>
                    </div>
                    <div className="body-form">
                        <form>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i class="fa fa-user"></i></span>
                                </div>
                                <input type="text" className="form-control"
                                    placeholder="email"
                                    value={this.state.email}
                                    onChange={(event) => { this.setState({ email: event.target.value }) }} />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i class="fa fa-lock"></i></span>
                                </div>
                                <input type="password" className="form-control" placeholder="password"
                                    value={this.state.password}
                                    onChange={(event) => { this.setState({ password: event.target.value }) }} />

                            </div>
                            <button type="button" className="btn btn-secondary btn-block" onClick={() => { this.handleLogin() }}>LOGIN</button>
                            <div className="message">
                                <div><input type="checkbox" /> Remember ME</div>
                                <div><a href="#">Forgot your password</a></div>
                            </div>
                        </form>
                        <div className="social">
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-twitter-square"></i></a>
                            <a href="#"><i className="fab fa-google"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        lang: state.app.language,
        userInfo: state.user.userInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),

        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
        userLoginFail: () => dispatch(actions.userLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
