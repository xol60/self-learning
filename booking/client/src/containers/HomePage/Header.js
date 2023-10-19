import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.scss'
import { FormattedMessage } from 'react-intl';
import { languages } from '../../utils'
import { changeLanguage } from '../../store/actions';
class Header extends Component {
    handleChangeLanguage = (id) => {
        this.props.changeLanguageDispatch(id)
    }
    render() {
        console.log(this.props.language)
        return (
            <React.Fragment>
                <div className='header'>

                    <div className='left-content'>

                        <i class="fas fa-bars"></i>
                        <div className='logo'>

                        </div>
                    </div>
                    <div className='center-content'>
                        <div className='child-center'>
                            <div>
                                <b><FormattedMessage id='header.specialty' /></b>
                            </div>
                            <div><FormattedMessage id='header.doctor_specialty' /></div>
                        </div>
                        <div className='child-center'>
                            <div>
                                <b><FormattedMessage id='header.facility' /></b>
                            </div>
                            <div><FormattedMessage id='header.facility_choose' /></div>
                        </div>
                        <div className='child-center'>
                            <div>
                                <b><FormattedMessage id='header.doctor' /></b>
                            </div>
                            <div><FormattedMessage id='header.doctor_choose' /></div>
                        </div>
                        <div className='child-center'>
                            <div>
                                <b><FormattedMessage id='header.medical' /></b>
                            </div>
                            <div><FormattedMessage id='header.medical_check' /></div>
                        </div>
                    </div>
                    <div className='right-content'>
                        <div className='support'>
                            <i class="fas fa-question"></i>
                            <div><FormattedMessage id='header.support' /></div>
                        </div>
                        <div className={this.props.language == 'vi' ? 'language-vi active' : 'language-vi'} >
                            <span onClick={() => this.handleChangeLanguage(languages.VI)}>
                                {languages.VI}
                            </span>
                        </div>
                        <div className={this.props.language == 'en' ? 'language-en active' : 'language-en'} >
                            <span onClick={() => this.handleChangeLanguage(languages.EN)}>
                                {languages.EN}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="header-content">
                    <div className='hello-content'>
                        <div className='test1-content '>
                            <FormattedMessage id='content.foundation' />
                        </div>
                        <div className='test2-content'>
                            <FormattedMessage id='content.care' />
                        </div>
                        <div className='search-content'>
                            <i class="fas fa-search"></i>

                            <input type='text' placeholder='input'></input>
                        </div>
                    </div>
                    <div className='function-content'>
                        <div className='child-content'>
                            <div className='icon-content'>
                                <i class="fas fa-hospital"></i>
                            </div>
                            <div className='sub-content'>
                                <FormattedMessage id='content.specialized' />
                            </div>
                        </div>
                        <div className='child-content'>
                            <div className='icon-content'>
                                <i class="fas fa-clipboard"></i>
                            </div>
                            <div className='sub-content'>
                                <FormattedMessage id='content.general' />
                            </div>
                        </div>
                        <div className='child-content'>
                            <div className='icon-content'>
                                <i class="fas fa-vial"></i>
                            </div>
                            <div className='sub-content'>
                                <FormattedMessage id='content.test' />
                            </div>
                        </div>
                        <div className='child-content'>
                            <div className='icon-content'>
                                <i class="fas fa-user-md"></i>
                            </div>
                            <div className='sub-content'>
                                <FormattedMessage id='content.mental' />
                            </div>
                        </div>
                        <div className='child-content'>
                            <div className='icon-content'>
                                <i class="fas fa-meh"></i>
                            </div>
                            <div className='sub-content'>
                                <FormattedMessage id='content.dental' />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>)
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageDispatch: (languageId) => { dispatch(changeLanguage(languageId)) }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
