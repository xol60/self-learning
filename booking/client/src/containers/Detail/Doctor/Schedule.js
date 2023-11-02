import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../../store/actions"
import './Doctor.scss';
import Header from '../../HomePage/Header';
import ReactQuill from 'react-quill';
import { DayListVi, DayListEn } from '../../../utils'
import moment from 'moment'
import Extra from './Extra';
import Booking from './Booking';
class Schedule extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            dateVi: [],
            dateEn: [],
            schedules: [],
            selectedDate: [],
            isShowModal: false,
        })
    }
    async componentDidMount() {
        var week = new Array();
        const current = new Date()
        let dateVi = []
        let dateEn = []
        for (var i = 0; i < 7; i++) {
            const date = new Date(current)
            current.setDate(current.getDate() + 1);
            const day = date.getDay()
            dateVi.push({
                value: date,
                label: DayListVi[day] + '-' + moment(date).format('DD/MM')
            })
            dateEn.push({
                value: date,
                label: DayListEn[day] + '-' + moment(date).format('DD/MM')
            })
        }
        this.setState({
            dateVi: dateVi,
            dateEn: dateEn,
            selectedDate: this.props.language == 'vi' ? dateVi : dateEn
        })

        await this.handleChangeDate()
    }
    componentDidUpdate(prevProps) {
        if (prevProps.language != this.props.language) {
            this.setState({
                selectedDate: this.props.language == 'vi' ? this.state.dateVi : this.state.dateEn
            })
        }

    }
    handleChangeDate = async (event) => {
        const time = event ? event.target.value : new Date()
        const data = await this.props.getSchedule({
            doctorId: this.props.idDoctor,
            date: moment(time).format('YYYY-MM-DD')
        })
        this.setState({
            schedules: data
        })
    }
    toggleFromParent = () => {
        console.log(777)
        this.setState({
            isShowModal: !this.state.isShowModal
        })
    }
    render() {
        const { selectedDate, schedules } = this.state

        return (
            <React.Fragment>
                <Booking isShowModal={this.state.isShowModal} toggle={() => this.toggleFromParent()} />
                <div className='schedule-doctor'>
                    <div className='content-left'>
                        <div>Lich kham</div>
                        <select name="date" onChange={(event) => this.handleChangeDate(event)} >
                            {selectedDate.map((date) => {
                                return (<option value={date.value} > {date.label}</option>)
                            })}
                        </select>
                        <div className='times'>
                            {
                                schedules.length != 0 ? <>
                                    {schedules.map((schedule) => {
                                        return (<button className='commit-time' onClick={this.toggleFromParent}>{schedule.timeData?.valueEn}</button>)
                                    })}
                                    <div>Chọn  và đặt (Phí đặt lịch 0đ)</div>
                                </> : <div style={{ color: "red" }}>Chua co lich vao thoi gian nay</div>
                            }

                        </div>
                    </div>

                    <Extra doctorId={this.props.idDoctor} />

                </div>
            </React.Fragment >
        );
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };

};

const mapDispatchToProps = dispatch => {
    return {
        getSchedule: (data) => dispatch(actions.getScheduleByDate(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
