import React, { Component } from 'react';
import { Checkbox, Form, Label } from 'semantic-ui-react'
import { Formik } from "formik";
import * as yup from "yup";
import InputErrorLabel from '../Label/InputErrorLabel';
import Cookies from 'universal-cookie';

class SupportForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alreadySigned: false,
            anonymity: false,
            authFailed: false,
            supportWithdrawDone: false,
        }
    }

    componentDidMount() {
        setTimeout(this.checkIfSigned, 2500);
    }

    checkIfSigned = () => {
        fetch('http://fathomless-ocean-65423.herokuapp.com/checkifsigned', {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                id: this.props.id,// petition/campaign id
                userID: this.props.userID, //user id
                jwtToken: new Cookies().get('token'),
            })
        })
            .then(resp => resp.json())
            .then(data => {
                console.log("Support form data", data);
                if (data === true) { //already signed
                    this.setState({ alreadySigned: true });
                }
            })
    }

    toggleAnonymity = () => { //hard coded this because default checkbox is ugly and S/UI does not sync well
        // console.log("toggling");
        if (this.state.anonymity) { //true
            this.setState({ anonymity: false });
        } else {
            this.setState({ anonymity: true });
        }
    }

    submitSupport = (values) => { //modify this after database is coded
        fetch('http://fathomless-ocean-65423.herokuapp.com/signsupport', {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                id: this.props.id,
                userID: this.props.userID,
                jwtToken: new Cookies().get('token'),
                description: values.description,
                reason: values.reason,
                anonymity: this.state.anonymity,
            })
        })
            .then(resp => resp.json())
            .then(data => {
                if (data === 'Success') {
                    this.setState({ alreadySigned: true });
                    this.props.refresh();
                } else if (data === 'Auth failed') {
                    this.setState({ authFailed: true })
                } else { //Auth failed
                    throw new Error(); //unable to support
                }
            })
    }

    withdrawSupport = () => {
        fetch('http://fathomless-ocean-65423.herokuapp.com/withdrawsupport', {
            method: 'delete',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                id: this.props.id,
                poster_id: this.props.userID,
                jwtToken: new Cookies().get('token'),
            })
        })
            .then(resp => resp.json())
            .then(data => {
                if (data === 'Success') {
                    this.setState({supportWithdrawDone: true});
                    this.props.refresh();
                } else if (data === 'Auth failed') {
                    this.setState({ authFailed: true })
                } else { //Auth failed
                    throw new Error(); //unable to support
                }
            })
    }

    render() {
        return (
            <Formik
                initialValues={{
                    description: "", //100 max
                    reason: "",
                }}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        this.submitSupport(values);
                        actions.setSubmitting(false);
                        actions.resetForm();
                    }, 2000);
                }}
                validationSchema={yup.object().shape({
                    description: yup.string().required("This field is required")
                        .max(50, "Please make your description shorter (50 Characters Maximum)"),
                    reason: yup.string(),
                })}
                render={({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => {
                    return (
                        <Form className='w-two-thirds center'>
                            <Form.Field className="mv2">
                                <p className='f5 fw7'>Describe yourself</p>
                                <input
                                    type='text'
                                    placeholder="E.g. Freshman residing in RC4"
                                    name="description"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.description}
                                    disabled={isSubmitting || this.state.alreadySigned}
                                />
                                <InputErrorLabel touched={touched.description} errors={errors.description} />
                            </Form.Field>

                            <Form.Field className='mv2'>
                                <p className='f5 fw7'>Reason for Support (Optional)</p>
                                <textarea
                                    placeholder="Why are you supporting this?"
                                    name="reason"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.reason}
                                    disabled={isSubmitting || this.state.alreadySigned}
                                />
                                <InputErrorLabel touched={touched.reason} errors={errors.reason} />

                            </Form.Field>

                            <Form.Field>
                                <Checkbox label='Enable anonymity' onClick={() => this.toggleAnonymity()} />
                            </Form.Field>

                            <div className='flex flex-column items-center'>
                                {this.state.alreadySigned
                                    ? <button
                                        className='landing-button bg-orange'
                                        type="submit"
                                        onClick={() => this.withdrawSupport()}
                                        >
                                        Withdraw Support
                                        </button>
                                    : <button
                                        className='landing-button'
                                        type="submit"
                                        onClick={handleSubmit}
                                        disabled={this.props.userID === '' || isSubmitting || this.state.authFailed}>
                                        Submit
                                        </button>
                                }

                                { this.state.supportWithdrawDone
                                    ?<Label basic color='red' pointing>
                                        Your support has been withdrawn
                                        </Label>
                                    : null
                                }

                                {this.state.authFailed
                                    ? <Label basic color='red' pointing>
                                        Authentication Error
                                        </Label>
                                    : null
                                }
                            </div>

                        </Form>
                    );
                }}
            />
        );
    }
}

export default SupportForm;

