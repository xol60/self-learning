import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Speciality.scss'
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Speciality extends Component {

    render() {
        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true
        };
        return (
            <div className='speciality'>
                <div className='info'>
                    <div className='speciality-title'>
                        CHUYEN KHOA PHO BIEN
                    </div>
                    <span className='more-button'>
                        Xem them
                    </span>
                </div>
                <Slider {...settings}>
                    <div className='slick-child'>
                        <div className='slick-image'>
                        </div>
                        <div className='slick-title'>
                            Co xuong khop
                        </div>
                    </div>
                    <div className='slick-child'>
                        <div className='slick-image'>
                        </div>
                        <div className='slick-title'>
                            Co xuong khop
                        </div>
                    </div>
                    <div className='slick-child'>
                        <div className='slick-image'>
                        </div>
                        <div className='slick-title'>
                            Co xuong khop
                        </div>
                    </div>
                    <div className='slick-child'>
                        <div className='slick-image'>
                        </div>
                        <div className='slick-title'>
                            Co xuong khop
                        </div>
                    </div>
                    <div className='slick-child'>
                        <div className='slick-image'>
                        </div>
                        <div className='slick-title'>
                            Co xuong khop
                        </div>
                    </div>
                    <div className='slick-child'>
                        <div className='slick-image'>
                        </div>
                        <div className='slick-title'>
                            Co xuong khop
                        </div>
                    </div>
                    <div className='slick-child'>
                        <div className='slick-image'>
                        </div>
                        <div className='slick-title'>
                            Co xuong khop
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Speciality);
