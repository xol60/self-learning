import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../../store/actions"
import './Doctor.scss';
import Header from '../../HomePage/Header';
import ReactQuill from 'react-quill';
import Schedule from './Schedule';
import Booking from './Booking'
class Doctor extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            doctor: {},

        })
    }
    async componentDidMount() {
        await this.props.getDoctorContent(this.props.match.params.id)
    }
    componentDidUpdate(prevProps) {
        if (prevProps.doctor != this.props.doctor) {
            this.setState({
                doctor: {
                    ...this.props.doctor,
                    imageBase: new Buffer(this.props.doctor.image, 'base64').toString('binary')
                }
            })
        }
    }

    render() {
        const doctor = this.state.doctor
        return (
            <React.Fragment>
                <Header isShowBanner={false} />
                <div className='doctor-content'>
                    <div className='doctor-intro'>
                        <div className='doctor-image' style={{ backgroundImage: `url(${this.state.doctor.imageBase})` }} >
                        </div>
                        <div className='doctor-description'>
                            <div className='doctor-name'>
                                {doctor.positionData?.valueVi + ' ' + doctor.firstName + ' ' + doctor.lastName}
                            </div>
                            <div className='doctor-info'>
                                {doctor.Markdown?.contentDescription}
                            </div>
                            <div class="fb-like" data-href="https://developers.facebook.com/docs/plugins/" data-width="40px" data-layout="" data-action="" data-size="" data-share="true"></div>
                        </div>
                    </div>
                    <Schedule idDoctor={this.props.match.params.id} />
                    <div className='doctor-quill'>
                        <ReactQuill
                            value={doctor.Markdown?.contentQuill}
                            readOnly={true}
                            theme={"bubble"}
                        />
                    </div>
                    <div >
                        <div class="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-width="" data-numposts="5"></div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        doctor: state.home.doctor
    };

};

const mapDispatchToProps = dispatch => {
    return {
        getDoctorContent: (id) => dispatch(actions.getDoctorMarkdown(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);
