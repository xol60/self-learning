import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import UserManage from '../containers/System/UserManage';
import DoctorManage from '../containers/System/DoctorManage'
import AddUser from '../containers/System/Admin/AddUser';
import Header from '../containers/Header/Header';
import DoctorSchedule from '../containers/System/User/DoctorSchedule';
import AddSchedule from '../containers/System/Admin/AddSchedule';
class System extends Component {
    render() {
        const { systemMenuPath, userInfo, doctorMenuPath } = this.props;
        console.log(userInfo.roleId == 'R1')
        return (
            <div className="system-container">
                <Header />
                <div className="system-list">
                    <Switch>
                        <Route path="/system/user-manage" component={UserManage} />
                        <Route path="/system/user-add" component={AddUser} />
                        <Route path="/system/doctor-manage" component={DoctorManage} />
                        <Route path="/system/manage/doctor-schedule" component={DoctorSchedule} />
                        <Route path="/system/schedule-add" component={AddSchedule} />
                        {userInfo.roleId == 'R1' ? <Route component={() => { return (<Redirect to={systemMenuPath} />) }} /> : <Route component={() => { return (<Redirect to={doctorMenuPath} />) }} />}
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        systemMenuPath: state.app.systemMenuPath,
        doctorMenuPath: state.app.doctorMenuPath,
        userInfo: state.user.userInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
