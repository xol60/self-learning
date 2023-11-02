import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './AddSchedule.scss'
import * as actions from '../../../store/actions'
import Select from 'react-select';
import DatePicker from "react-datepicker";
import { toast } from 'react-toastify'
import "react-datepicker/dist/react-datepicker.css";
import { DateFormat } from '../../../utils';
import moment from 'moment';
import _ from 'lodash'
class AddSchedule extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listDoctors: [],
            selectedDoctor: {},
            dayChoose: new Date(),
            listTime: [],
            selectedTime: []
        }
    }

    async componentDidMount() {
        await this.props.getDoctorsName()
        await this.props.getTimeList()
    }
    handleChangeDate(date) {
        this.setState({
            dayChoose: date
        })
    }
    transferDataDoctor(doctors) {
        if (doctors && doctors.length > 0) {
            let result = []
            doctors.map(doctor => {
                result.push({
                    value: doctor.id + '',
                    label: doctor.positionData.valueEn + ' ' + doctor.firstName + ' ' + doctor.lastName
                })
            })
            return result
        }
    }
    transferDataTime(timeList) {
        if (timeList && timeList.length > 0) {
            let result = []
            timeList.map(time => {
                result.push({
                    value: time.keyMap + '',
                    label: time.valueEn
                })
            })
            return result
        }
    }
    handleDoctorChange = (selectedOption) => {
        this.setState({
            selectedDoctor: selectedOption
        })
    };
    handleChangeTime = (selectedOption) => {

        this.setState({
            selectedTime: selectedOption
        })
    };
    componentDidUpdate(prevProps) {
        if (prevProps.doctors != this.props.doctors) {
            this.setState({
                listDoctors: this.transferDataDoctor(this.props.doctors)
            })
        }
        if (prevProps.times != this.props.times) {
            this.setState({
                listTime: this.transferDataTime(this.props.times)
            })
        }
    }
    handleSaveSchedule = () => {
        let { selectedDoctor, dayChoose, selectedTime } = this.state;
        if (!dayChoose) {
            toast.error('Input day')
            return;
        }
        if (!selectedDoctor && _.isEmpty(selectedDoctor)) {
            toast.error('Input doctor')
            return;
        }
        dayChoose = moment(dayChoose).format('MM/DD/YYYY')
        let result = []
        selectedTime.map(time => {
            result.push({
                doctorId: selectedDoctor.value,
                date: dayChoose,
                timeType: time.value
            })
        })
        this.props.addNewSchedules(result)
    }
    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <div className='schedule-doctor row justify-content-center'>
                    <div className='select col-md-4'>
                        <label>
                            Select doctor
                        </label>
                        <Select
                            value={this.state.selectedDoctor}
                            onChange={this.handleDoctorChange}
                            options={this.state.listDoctors}
                        />
                    </div>
                    <div className='select col-md-6'>
                        <label >
                            Select Date
                        </label>

                        <DatePicker
                            selected={this.state.dayChoose}
                            onChange={(date) => this.handleChangeDate(date)}
                            minDate={new Date()}
                        />
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <label>
                            Select Time
                        </label>
                        <div className='list-time'>
                            <Select
                                value={this.state.selectedTime}
                                isMulti
                                onChange={this.handleChangeTime}
                                options={this.state.listTime}
                            />
                        </div>
                    </div>
                </div>
                <button className='col-2 btn btn-primary ' onClick={this.handleSaveSchedule}>
                    Save
                </button>
            </React.Fragment>
        )
    }

}

const mapStateToProps = state => {
    return {
        doctors: state.admin.doctors,
        times: state.admin.times
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getDoctorsName: () => dispatch(actions.getDoctorsNameList()),
        getTimeList: () => dispatch(actions.getTimeList()),
        addNewSchedules: (data) => dispatch(actions.addListSchedules(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddSchedule);
