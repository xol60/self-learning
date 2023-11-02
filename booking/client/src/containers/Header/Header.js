import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu, doctorMenu } from './menuApp';
import './Header.scss';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = ({

        })
    }
    render() {
        const { processLogout, userInfo } = this.props;
        console.log(userInfo.roleId)
        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    {userInfo.roleId == 'R1' ? <Navigator menus={adminMenu} /> : <Navigator menus={doctorMenu} />}
                </div>

                {/* nút logout */}
                <div className="btn btn-logout" onClick={() => processLogout()}>
                    <i className="fas fa-sign-out-alt"></i>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo
    };

};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
