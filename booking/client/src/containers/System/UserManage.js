import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'
import axios from '../../axios'
import ModalUser from './ModalUser';
import { deleteUserApi } from '../../services/userService';
class UserManage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            arrUsers: [],
            isUserModalOpen: false
        }
    }

    async componentDidMount() {
        let res = await axios.get('/api/get-all')
        if (res && res.errorCode == 0) {
            this.setState({
                arrUsers: res.data
            })
        }
    }
    handleCreateUser() {
        this.setState({
            isUserModalOpen: true
        })
    }
    toggleUserModal() {

        this.setState({
            isUserModalOpen: !this.state.isUserModalOpen
        })
    }
    async createNewUser(data) {
        console.log({ ...data })
        try {
            let res = await axios.post('/api/register-user', { ...data })
            if (res.errorCode == 0) {
                const data = await axios.get('/api/get-all')
                if (data && data.errorCode == 0) {
                    this.setState({
                        arrUsers: data.data
                    })
                }
            }
            alert(res.data.message)
        }
        catch (e) { console.log(e) }
    }
    async handleDelete(id) {
        try {
            let res = await deleteUserApi(id)
            console.log(res)
            if (res.errorCode == 0) {
                const data = await axios.get('/api/get-all')
                if (data && data.errorCode == 0) {
                    this.setState({
                        arrUsers: data.data
                    })
                }
            }
            alert(res.data)
        }
        catch (e) { console.log(e) }
    }
    render() {
        let arrUsers = this.state.arrUsers
        console.log(arrUsers)
        return (
            <div className='table-form'>
                <ModalUser open={this.state.isUserModalOpen} toggleParent={() => this.toggleUserModal()}
                    createNewUser={(data) => this.createNewUser(data)} />
                <div className="text-center">Manage users</div>
                <button className='add-user' onClick={() => this.handleCreateUser()}>
                    <i class="fas fa-plus">Add New User</i>
                </button>
                <section>
                    <div className="tbl-header">
                        <table cellpadding="0" cellspacing="0" border="0">
                            <thead>
                                <tr>
                                    <th>Email</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div className="tbl-content">
                        <table cellpadding="0" cellspacing="0" border="0">
                            <tbody>
                                {arrUsers && arrUsers.map((item, index) => {
                                    return (
                                        <tr>
                                            <td>{item.email}</td>
                                            <td>{item.firstName + item.lastName}.</td>
                                            <td>{item.address}</td>
                                            <td>{item.isActive == 1 ? 'Active' : 'Inactive'}</td>
                                            <td>
                                                <button className="btn-pencil">
                                                    <i class="fas fa-edit"></i>
                                                </button>
                                                <button className="btn-trash" onClick={() => this.handleDelete(item.id)}>
                                                    <i class="fas fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
