import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Speciality from './Section/Specialities';
class HomePage extends Component {

    render() {
        return (<div>
            <Header />
            <Speciality />
            <div style={{ height: '200px' }}></div>
        </div>)
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
