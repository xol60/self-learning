import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './DoctorSchedule.scss'
import Select from 'react-select';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';



class DoctorSchedule extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }





    render() {

        return (

            <div>
                fasdfasdf
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

export default connect(mapStateToProps, mapDispatchToProps)(DoctorSchedule);
