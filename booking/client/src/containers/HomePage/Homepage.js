import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Speciality from './Section/Specialities';
import HospitalSpeciality from './Section/Hospital_Speciality'
import DoctorSpeciality from './Section/Doctor_Speciality'
import Footer from './Footer';
class HomePage extends Component {

    render() {
        return (<div>
            <Header isShowBanner={true} />
            <Speciality />
            <HospitalSpeciality />
            <DoctorSpeciality />
            <div style={{ height: '100px' }}></div>
            <Footer />
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
