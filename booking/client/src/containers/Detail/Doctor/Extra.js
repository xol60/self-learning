import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../../store/actions"
import './Doctor.scss';
import { getDoctorInfo } from '../../../services/userService';
class Extra extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            closeDetail: true,
            clinicName: '',
            clinicAddress: '',
            note: '',
            paymentData: {},
            provinceData: {},
            priceData: {}
        })
    }
    async componentDidMount() {
        const data = await this.getDataFromServer(this.props.doctorId)
    }
    async getDataFromServer(doctorId) {
        const { data } = await getDoctorInfo(doctorId)
        this.setState({
            clinicName: data.clinicName,
            clinicAddress: data.clinicAddress,
            note: data.note,
            paymentData: data.paymentData,
            provinceData: data.provinceData,
            priceData: data.priceData
        })
    }
    componentDidUpdate(prevProps) {
        if (prevProps.doctorId != this.props.doctorId) {
            const data = getDoctorInfo(this.props.doctorId)
            console.log(data)
        }
    }
    handlecloseDetail = () => {
        this.setState({
            closeDetail: !this.state.closeDetail
        })
    }
    render() {
        const { closeDetail, clinicName, clinicAddress, paymentData, priceData, provinceData, note } = this.state
        console.log(this.state)
        return (
            <div className='content-right'>
                <div className='address'>
                    Địa chỉ khám
                </div>
                <div className='name-clinic'>
                    {clinicName}
                </div>
                <div className='address-clinic'>
                    {clinicAddress + ' ' + provinceData.valueVi}
                </div>
                {closeDetail ? (
                    <div className='price-clinic'>
                        <div className='name-price'>
                            Gia kham
                        </div>
                        <div className='price'>
                            {priceData.valueVi}
                        </div>
                        <span className='more-detail' onClick={this.handlecloseDetail}>
                            Xem chi tiet
                        </span>
                    </div>
                ) : (
                    <div className='note-open'>
                        <div className='name-price'>
                            Gia kham
                        </div>
                        <div className='note-clinic'>
                            <span className='price-clinic-open'>
                                Gia kham
                            </span>
                            <span className='price'>{priceData.valueVi}</span>
                            <div className='extra-note'>
                                {note}
                            </div>
                        </div>
                        <div className='less-detail' onClick={this.handlecloseDetail}>AN CHI TIET</div>
                    </div>
                )
                }
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {

    };

};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Extra);
