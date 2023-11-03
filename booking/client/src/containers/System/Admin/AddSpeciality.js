import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './AddSchedule.scss'
import * as actions from '../../../store/actions'
import Select from 'react-select';
import DatePicker from "react-datepicker";
import { toast } from 'react-toastify'
import "react-datepicker/dist/react-datepicker.css";
import './AddSpeciality.scss'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import { ToBase64 } from '../../../utils';
class AddSpeciality extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: '',
            image: ''
        }
    }

    async componentDidMount() {

    }
    handleChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleQuillChange = (quill) => {
        this.setState({
            description: quill
        })
    }
    componentDidUpdate(prevProps) {

    }
    async handleOnImageChange(event) {
        let files = event.target.files;
        const file = files[0]
        const image64 = await ToBase64.getBase64(file)
        const copyState = this.state;
        copyState.image = image64
        this.setState({
            ...copyState
        })
    }
    render() {
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
        const { description, image } = this.state
        console.log(this.state)
        return (

            <div className='speciality-doctor'>
                <div className='row'>
                    <div className='col-md-6' >
                        <label>
                            Name
                        </label>
                        <input className='name-speciality' onChange={(event) => this.handleChangeName(event)} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12' >
                        <label>
                            Description
                        </label>
                        <ReactQuill
                            value={description}
                            onChange={this.handleQuillChange}
                            modules={modules}
                            theme={'snow'}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-5'>
                        <input type="file" id="inputFile" hidden onChange={(event) => { this.handleOnImageChange(event) }} />
                        <label className='' htmlFor='inputFile' >
                            <i class="fas fa-upload"></i>
                        </label>
                        <div className='image-speciality' style={{ backgroundImage: `url(${image})` }}>

                        </div>
                    </div>
                </div>
            </div>
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

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddSpeciality);
