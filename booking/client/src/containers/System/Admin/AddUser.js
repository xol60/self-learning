import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './AddUser.scss'
import * as actions from '../../../store/actions'
import ModalImage from '../ModalImage';
import { ToBase64 } from '../../../utils';
class AddUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {
                email: '',
                firstName: '',
                lastName: '',
                password: '',
                genderId: true,
                address: '',
                roleId: '',
                phoneNumber: '',
                positionId: '',
                image: ''
            },
            rolesArr: [],
            positionsArr: [],
            message: '',
            isImageModalOpen: false,
            imageBase: ''
        }
    }

    async componentDidMount() {
        await this.props.fetchRolesArr()
        await this.props.fetchPositionsArr()
    }
    handleOnChange(event, id) {
        const copyState = { ...this.state }
        copyState.user[id] = event.target.value
        this.setState({
            ...copyState
        }, () => { console.log(this.state) })
    }
    componentDidUpdate(prevProps) {
        if (this.props.roles !== prevProps.roles) {
            this.setState({
                rolesArr: this.props.roles,
                user: {
                    ...this.state.user,
                    roleId: this.props.roles[0] ? this.props.roles[0].key : ''
                }
            })
        }
        if (this.props.positions !== prevProps.positions) {
            this.setState({
                positionsArr: this.props.positions,
                user: {
                    ...this.state.user,
                    positionId: this.props.positions[0] ? this.props.positions[0].key : ''
                }
            })
        }
    }


    async handleOnImageChange(event) {
        let files = event.target.files;
        const file = files[0]
        const image64 = await ToBase64.getBase64(file)
        const copyState = this.state;
        copyState.user.image = image64
        this.setState({
            ...copyState
        })
    }
    async handleRegister() {
        await this.props.addNewUser({ ...this.state.user })
    }
    handleOpenImage() {
        const copyState = this.state;

        copyState.imageBase = this.state.user.image
        this.setState({
            ...this.copyState
        })
        this.toggleImageModal()
    }
    toggleImageModal() {
        this.setState({
            isImageModalOpen: !this.state.isImageModalOpen
        })
    }
    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <ModalImage open={this.state.isImageModalOpen} toggleParent={() => this.toggleImageModal()}
                    data={this.state.imageBase}
                />
                <div className='info'>
                    <div className='add-title'>
                        Register a new user
                    </div>
                    {this.state.message ? (
                        <div className='message'>
                            {this.state.message}
                        </div>
                    ) : ''}
                </div>
                <div className='form-add'>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputEmail4">First Name</label>
                            <input className="form-control" placeholder="John" name="firstName" onChange={(event) => { this.handleOnChange(event, 'firstName') }} />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Last Name</label>
                            <input className="form-control" placeholder="Smith" name="lastName" onChange={(event) => { this.handleOnChange(event, 'lastName') }} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputEmail4">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" name="email" onChange={(event) => { this.handleOnChange(event, 'email') }} />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Password</label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="Password"
                                name="password" onChange={(event) => { this.handleOnChange(event, 'password') }} />
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputAddress">Address</label>
                        <input className="form-control" placeholder="123 USA" name="address" onChange={(event) => { this.handleOnChange(event, 'address') }} />
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputCity">Phone number</label>
                            <input type="text" className="form-control" name="phoneNumber"
                                onChange={(event) => { this.handleOnChange(event, 'phoneNumber') }} />
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className="form-group col-md-2">
                            <label for="inputState">Gender</label>
                            <select className="form-control" name="genderId"
                                onChange={(event) => { this.handleOnChange(event, 'genderId') }}>
                                <option value={true}>Male</option>
                                <option value={false}>Female</option>
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <label for="inputState">Role</label>
                            <select className="form-control" name="roleId"
                                onChange={(event) => { this.handleOnChange(event, 'roleId') }}>
                                {
                                    this.state.rolesArr.map((role) => {

                                        return <option value={role.keyMap}>{role.valueEn}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <label for="inputState">Position</label>
                            <select className="form-control" name="roleId"
                                onChange={(event) => { this.handleOnChange(event, 'positionId') }}>
                                {
                                    this.state.positionsArr.map((position) => {

                                        return <option value={position.keyMap}>{position.valueEn}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <div className='image-group'>
                                <input type="file" id="inputFile" hidden onChange={(event) => { this.handleOnImageChange(event) }} />
                                <label >Upload Image</label>
                                <label className='' htmlFor='inputFile' >
                                    <i class="fas fa-upload"></i>
                                </label>
                                <div className='image-user' onClick={() => this.handleOpenImage()} style={{ backgroundImage: `url(${this.state.user.image})` }}>

                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => this.handleRegister()}>Register</button>
                </div>
            </React.Fragment>
        )
    }

}

const mapStateToProps = state => {
    return {
        roles: state.admin.roles,
        positions: state.admin.positions
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchRolesArr: () => dispatch(actions.fetchRoleStart()),
        fetchPositionsArr: () => dispatch(actions.fetchPositionStart()),
        addNewUser: (data) => dispatch(actions.fetchAddUserStart(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
