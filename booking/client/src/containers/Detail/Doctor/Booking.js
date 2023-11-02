import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../../store/actions"
import './Booking.scss';
import { Modal } from 'reactstrap';
class Booking extends Component {
    constructor(props) {
        super(props)
        this.state = ({

        })
    }
    toggle = () => {
        this.props.toggle()
    }
    render() {
        console.log(this.props)
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
                        <div className='booking-price'>
                            Gia kham 5000000
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <label for="inputName">Ho ten</label>
                                <input type="name" class="form-control" id="inputName" />
                            </div>
                            <div className='col-md-6'>
                                <label for="inputPhone">So dien thoai</label>
                                <input type="phone" class="form-control" id="inputPhone" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <label for="inputEmail">Email</label>
                                <input type="email" class="form-control" id="inputEmail" />
                            </div>
                            <div className='col-md-6'>
                                <label for="inputAddress">Dia chi lien he</label>
                                <input type="address" class="form-control" id="inputAddress" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <label for="inputName">Kham cho ai</label>
                                <input type="name" class="form-control" id="inputWho" />
                            </div>
                            <div className='col-md-6'>
                                <label for="inputPhone">Gioi tinh</label>
                                <input type="phone" class="form-control" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <label for="inputWhy">Ly do kham</label>
                                <input type="text" class="form-control" id="inputWhy" />
                            </div>
                        </div>
                    </div>
                    <div className='booking-footer'>
                        <button className='btn-booking-save'>
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
