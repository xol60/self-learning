import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './DoctorManage.scss'
import Select from 'react-select';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import * as actions from '../../store/actions'


class DoctorManage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            doctorChoice: '',
            contentDescription: '',
            contentQuill: '',
            doctorList: [],
            doctorInfo: [],
            infos: {},
            selectedPayment: '',
            selectedProvince: '',
            selectedPrice: '',
            note: '',
            clinicName: '',
            clinicAddress: '',
        }
    }
    handleDoctorChange = (selectedOption) => {
        const copyState = this.state
        copyState.doctorChoice = selectedOption
        this.setState({
            ...copyState
        })
    };
    handleQuillChange = (quill) => {
        this.setState({
            contentQuill: quill
        })
    }
    handleContentChange = (event) => {
        this.setState({
            contentDescription: event.target.value
        })
    }
    transferData(doctors) {
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
    buildInfoFromData(infos) {
        if (infos && infos.length != 0) {
            let result = []
            infos.map(info => {
                result.push({
                    value: info.keyMap,
                    label: info.valueEn
                })

            })
            return result
        }
    }
    async componentDidMount() {
        await this.props.getDoctorsName()
        await this.props.getDoctorInfo()
    }
    componentDidUpdate(prevProps) {
        if (prevProps.doctorList != this.props.doctorList) {
            this.setState({
                doctorList: this.transferData(this.props.doctorList)
            })
        }
        if (prevProps.infos != this.props.infos) {
            const dataFromServer = this.props.infos
            this.setState({
                infos: {
                    payment: this.buildInfoFromData(dataFromServer.payment),
                    price: this.buildInfoFromData(dataFromServer.price),
                    province: this.buildInfoFromData(dataFromServer.province),
                }
            })
        }
    }
    async handleSubmit() {
        await this.props.addNewMarkdown({
            doctorId: this.state.doctorChoice.value,
            contentDescription: this.state.contentDescription,
            contentQuill: this.state.contentQuill,
            selectedProvince: this.state.selectedProvince.value,
            selectedPayment: this.state.selectedPayment.value,
            selectedPrice: this.state.selectedPrice.value,
            clinicName: this.state.clinicName,
            clinicAddress: this.state.clinicAddress,
            note: this.state.note
        })
    }
    handleDoctorInfoChange = (selectedOption, select) => {
        let copyState = { ...this.state }
        copyState[select.name] = selectedOption
        this.setState({
            ...copyState
        })
    }
    handleChangeInput = (event, id) => {
        let copyState = { ...this.state }
        copyState[id] = event.target.value
        this.setState({
            ...copyState
        })
    }
    render() {
        const { selectedOption, contentQuill, infos, selectedPayment, selectedPrice, selectedProvince, doctorList } = this.state
        console.log(this.state.doctorList)
        const modules = {
            toolbar: [
                [{ header: [1, 2, false] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [
                    { list: 'ordered' },
                    { list: 'bullet' },
                    { indent: '-1' },
                    { indent: '+1' },
                ],
                ['link', 'image'],
                ['clean'],
            ],
        };
        return (
            <div className='content-doctor'>
                <div className="row justify-content-center">
                    <div class="col-md-4">
                        <label >Select doctor:</label>
                        <Select
                            value={selectedOption}
                            onChange={this.handleDoctorChange}
                            options={doctorList}
                        />
                    </div>
                    <div class="col-md-6">
                        <label >Content</label>
                        <textarea class="form-control" rows="2" onChange={(event) => this.handleContentChange(event)}></textarea>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div class="col-md-3">
                        <label >Select Province:</label>
                        <Select
                            value={selectedProvince}
                            onChange={this.handleDoctorInfoChange}
                            options={infos.province}
                            name='selectedProvince'
                        />
                    </div>
                    <div class="col-md-3">
                        <label >Select Price:</label>
                        <Select
                            value={selectedPrice}
                            onChange={this.handleDoctorInfoChange}
                            options={infos.price}
                            name='selectedPrice'
                        />
                    </div>
                    <div className="col-md-3">
                        <label >Select Payment:</label>
                        <Select
                            value={selectedPayment}
                            onChange={this.handleDoctorInfoChange}
                            options={infos.payment}
                            name='selectedPayment'
                        />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-3 sub-info">
                        <label >Name of Clinic:</label>
                        <input className='form-control' onChange={(event) => this.handleChangeInput(event, 'clinicName')}></input>
                    </div>
                    <div className="col-md-3 sub-info">
                        <label >Address of Clinic:</label>
                        <input className='form-control' onChange={(event) => this.handleChangeInput(event, 'clinicAddress')}></input>
                    </div>
                    <div className="col-md-3 sub-info">
                        <label >Note:</label>
                        <input className='form-control' onChange={(event) => this.handleChangeInput(event, 'note')}></input>
                    </div>
                </div>
                <div className="row justify-content-center " >

                    <div className='quill-doctor'>
                        <label >Detail doctor:</label>
                        <ReactQuill
                            value={contentQuill}
                            onChange={this.handleQuillChange}
                            modules={modules}
                            theme={'snow'}
                        />
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <button className='submit-button' onClick={() => this.handleSubmit()}>
                        Submit
                    </button>
                </div>
            </div >
        )
    }

}

const mapStateToProps = state => {
    return {
        doctorList: state.admin.doctors,
        infos: state.admin.infos
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addNewMarkdown: (data) => dispatch(actions.addMarkdownStart(data)),
        getDoctorsName: () => dispatch(actions.getDoctorsNameList()),
        getDoctorInfo: () => dispatch(actions.getInfoDoctor())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorManage);
