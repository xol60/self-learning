import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
class ModalUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            genderId: true,
            address: '',
            roleId: '-1',
            phoneNumber: ''
        }
    }

    componentDidMount() {
    }
    handleOnChange(event, id) {
        const copyState = { ...this.state }
        copyState[id] = event.target.value
        this.setState({
            ...copyState
        }, () => { console.log(this.state) })
    }


    toggle() {
        this.props.toggleParent()
    }
    handleSubmit() {
        this.props.createNewUser(this.state)
        this.props.toggleParent()
    }
    render() {
        console.log(this.props.open)
        return (
            <Modal isOpen={this.props.open} toggle={() => this.toggle()}
                size="md"  >
                <ModalHeader toggle={() => this.toggle()}>Create a new user</ModalHeader>
                <ModalBody>
                    <div >
                        <div class="row">
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="inputEmail4">First Name</label>
                                    <input class="form-control" placeholder="John" name="firstName" onChange={(event) => { this.handleOnChange(event, 'firstName') }} />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="inputPassword4">Last Name</label>
                                    <input class="form-control" placeholder="Smith" name="lastName" onChange={(event) => { this.handleOnChange(event, 'lastName') }} />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="inputEmail4">Email</label>
                                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email" name="email" onChange={(event) => { this.handleOnChange(event, 'email') }} />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="inputPassword4">Password</label>
                                    <input type="password" class="form-control" id="inputPassword4" placeholder="Password"
                                        name="password" onChange={(event) => { this.handleOnChange(event, 'password') }} />
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="inputAddress">Address</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" name="address"
                                    onChange={(event) => { this.handleOnChange(event, 'address') }} />
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="inputCity">Phone number</label>
                                    <input type="text" class="form-control" name="phoneNumber"
                                        onChange={(event) => { this.handleOnChange(event, 'phoneNumber') }} />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="inputState">Sex</label>
                                    <select class="form-control" name="genderId"
                                        onChange={(event) => { this.handleOnChange(event, 'genderId') }}>
                                        <option value="1">Male</option>
                                        <option value="0">Female</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-2">
                                    <label for="inputState">Role</label>
                                    <select class="form-control" name="roleId"
                                        onChange={(event) => { this.handleOnChange(event, 'roleId') }}>
                                        <option value="1">Admin</option>
                                        <option value="0">Doctor</option>
                                        <option value="-1">Paitent</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => this.handleSubmit()}>
                        Submit
                    </Button>{' '}
                    <Button color="secondary" onClick={() => this.toggle()}>
                        Cancel
                    </Button>
                </ModalFooter>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
