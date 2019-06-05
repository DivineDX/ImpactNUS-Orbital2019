import React, { Component } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
    // Left and Right determines width of box
    content: {
        top: '50%',
        bottom: 'auto',
        left: '50%',
        right: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class LoginModal extends Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    render() {
        return (
            <div>
                <button onClick={this.openModal} className="dib bg-animate hover-bg-orange no-underline pv2 ph4 br-pill ba">Login</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    {/* <h2 ref={subtitle => this.subtitle = subtitle}></h2> */}
                    <main class="pa4 black-80">
                        <form class="measure center">
                            <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                                <legend class="tc f4 fw6 ph0 mh0">Sign In</legend>
                                <div class="mt3">
                                    <label class="db fw6 lh-copy f6" for="email-address">NUS UserID</label>
                                    <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                                </div>
                                <div class="mv3">
                                    <label class="db fw6 lh-copy f6" for="password">Password</label>
                                    <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                                </div>
                                <label class="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
                            </fieldset>
                            <div class="">
                                <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
                            </div>
                        </form>
                    </main>
                    <button onClick={this.closeModal}>close</button>
                </Modal>
            </div>
        );
    }
}

export default LoginModal;