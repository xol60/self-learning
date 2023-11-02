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
class ModalImage extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
    }


    toggle() {
        this.props.toggleParent()
    }

    render() {
        console.log(this.props.data)
        return (
            <Modal isOpen={this.props.open} toggle={() => this.toggle()}
                size="md"  >
                <ModalHeader toggle={() => this.toggle()}></ModalHeader>
                <ModalBody>
                    <img src={this.props.data} style={{ width: '100%', height: '100%' }} />
                </ModalBody>

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

export default connect(mapStateToProps, mapDispatchToProps)(ModalImage);
