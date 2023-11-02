import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Speciality.scss'
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as actions from '../../../store/actions'
import { withRouter } from 'react-router-dom';
class DoctorSpeciality extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            doctors: []
        })
    }
    async componentDidMount() {
        await this.props.getLimitDoctors(5)
    }
    componentDidUpdate(prevProps) {
        if (this.props.doctors != prevProps.doctors) {
            this.setState({
                doctors: this.props.doctors
            })
        }
    }
    handleClickDoctor(id) {
        this.props.history.push("/doctor/" + id)
    }
    render() {
        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            // autoplay: true,
            // autoplaySpeed: 2000,
            // pauseOnHover: true
        };
        let doctors = this.state.doctors
        return (

            < div className='doctor-speciality' >
                <div className='info'>
                    <div className='speciality-title'>
                        BAC SI NOI BAT
                    </div>
                    <span className='more-button'>
                        Xem them
                    </span>
                </div>
                <Slider {...settings}>

                    {doctors.map((doctor) => {
                        const imageBase = new Buffer(doctor.image, 'base64').toString('binary')
                        return (
                            <div className='slick-child' style={{ width: 200 }} onClick={() => this.handleClickDoctor(doctor.id)} >

                                <div className='slick-image' style={{ backgroundImage: `url(${imageBase})` }} >
                                </div>
                                <div className='slick-title'>
                                    {doctor.positionData.valueVi + ' ' + doctor.firstName + ' ' + doctor.lastName}
                                </div>
                                <div className='slick-sub'>
                                    Da lieu
                                </div>
                            </div>
                        )
                    })
                    }
                </Slider >
            </ div >
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        doctors: state.home.doctors
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getLimitDoctors: (input) => dispatch(actions.getLimitDoctors(input))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DoctorSpeciality));
