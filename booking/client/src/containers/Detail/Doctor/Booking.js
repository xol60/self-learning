import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import * as actions from "../../../store/actions"
import './Booking.scss';
import { Modal } from 'reactstrap';
import { addNewBooking } from '../../../services/paitentService';
class Booking extends Component {
    constructor(props) {
        super(props)
        this.state = ({

            email: '',
            lastName: '',
            address: '',
            gender: false,
            phoneNumber: '',
            forWho: '',
            reason: '',
        })
    }
    handleChangeInfo(event, idInput) {
        const copyState = { ...this.state }
        copyState[idInput] = event.target.value
        this.setState({
            ...copyState
        })
    }
    toggle = () => {
        this.props.toggle()
    }
    submitBooking = async () => {
        const res = await addNewBooking({
            ...this.state,
            doctorId: this.props.infor.doctorId,
            timeType: this.props.infor.timeType,
            date: this.props.infor.date
        })
        if (res.errorCode == 0) {
            toast.success(res.data)
        }
    }
    render() {
        console.log(this.state)
        console.log(this.props.infor)
        return (
            <Modal isOpen={this.props.isShowModal} toggle={this.toggle} modalClassName='booking-modal-container' size="lg"
                centered>
                <div className='booking-modal-content'>
                    <div className='booking-header'>
                        <span className='out-modal' onClick={this.toggle}>
                            <i class="fas fa-times"></i>
                        </span>
                        <div className='booking-content'>Thong tin dat lich kham benh</div>
                    </div>
                    <div className='booking-body'>

                        <div className='row'>
                            <div className='col-md-6'>
                                <label for="inputName">Ho ten</label>
                                <input type="name" class="form-control" id="inputName" onChange={(event) => this.handleChangeInfo(event, 'lastName')} />
                            </div>
                            <div className='col-md-6'>
                                <label for="inputPhone">So dien thoai</label>
                                <input type="phone" class="form-control" id="inputPhone" onChange={(event) => this.handleChangeInfo(event, 'phoneNumber')} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <label for="inputEmail">Email</label>
                                <input type="email" class="form-control" id="inputEmail" onChange={(event) => this.handleChangeInfo(event, 'email')} />
                            </div>
                            <div className='col-md-6'>
                                <label for="inputAddress">Dia chi lien he</label>
                                <input type="address" class="form-control" id="inputAddress" onChange={(event) => this.handleChangeInfo(event, 'address')} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <label for="inputName">Kham cho ai</label>
                                <input type="name" class="form-control" id="inputWho" onChange={(event) => this.handleChangeInfo(event, 'forWho')} />
                            </div>
                            <div className='col-md-6 gender-col'>
                                <label for="inputPhone">Gioi tinh</label>
                                <select onChange={(event) => this.handleChangeInfo(event, "gender")}>
                                    <option value={true}>Nam</option>
                                    <option value={false}>Nu</option>
                                </select>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <label for="inputWhy">Ly do kham</label>
                                <input type="text" class="form-control" id="inputWhy" onChange={(event) => this.handleChangeInfo(event, 'reason')} />
                            </div>
                        </div>
                    </div>
                    <div className='booking-footer'>
                        <button className='btn-booking-save' onClick={this.submitBooking}>
                            Xac nhan
                        </button>
                        <button className='btn-booking-cancel' onClick={this.toggle}>
                            Thoat
                        </button>
                    </div>
                </div>
            </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(Booking);
