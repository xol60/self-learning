import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Footer.scss'
import { FormattedMessage } from 'react-intl';
import { languages } from '../../utils'
import { changeLanguage } from '../../store/actions';

class Footer extends Component {

    render() {

        return (
            <React.Fragment>
                <div className='footer'>
                    <div className='info'>
                        <div className='title-footer'>
                            Nguyen Thanh Dat thuc tap web
                        </div>
                        <div className='sub'>
                            Đây là website được tạo bằng clone bookingcare.vn với sự giúp đỡ của a ERIC
                        </div>
                    </div>
                    <div className='video'>
                        <iframe width='82%' height='350px' src="https://www.youtube.com/embed/h00db_INbqI"
                            title="[EnA][Vietsub + Kara] OST Kimi no nawa - Zen zen zense" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                    </div>
                </div>
            </React.Fragment>)
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
