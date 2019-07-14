import React, { Component } from 'react';
import { Button, Checkbox, Form, Input } from 'semantic-ui-react'
import { Formik } from "formik";
import * as yup from "yup";
// import DatePicker from "react-datepicker";
// import '../../../node_modules/react-datepicker/dist/react-datepicker.css';

class Form_Step2 extends Component {
    render() {
        const { navButton, toggleAnonymity, currentAnonymity, currState } = this.props;
        const currType = currState.type;
        let target, placeholder;
        if (currType === 'petition') {
            target = "Select a decision maker";
            placeholder = "This is the organization/person who is able to respond to your petition";
        } else if (currType === 'campaign') {
            target = "Select a target audience";
            placeholder = "This is your main group of people you aim to reach out to";
        }

        return (
            <Formik
                initialValues={{
                    recipient: currState.recipient,
                    targetNum: currState.targetNum,
                    date_end: currState.date_end,
                }}

                onSubmit={(values) => {
                    navButton(3, values);
                }}

                validationSchema={yup.object().shape({
                    recipient: yup.string().required("This field is required").max(50, "50 Characters Maximum"),
                    targetNum: yup.number().required("You must state this number").min(10, "Minimum 10"),
                    date_end: currType === 'campaign' &&
                        yup.date("Invalid Date").required("You must state an end date")
                            .min(new Date(), "Your cannot state a past date")
                            .max(new Date(2020, 6, 13), "Maximum Campaign length is 1 year"),
                })}

                render={({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => {
                    return (
                        <Form size='huge'>
                            <Form.Field >
                                <h1>{target}</h1>
                                {touched.recipient && (
                                    <div className='i mb4 red'> {errors.recipient}</div>
                                )}
                                <Input
                                    type='text'
                                    name="recipient"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.recipient}
                                    placeholder={placeholder} />
                            </Form.Field>

                            <Form.Field>
                                <h1>State your target number of supporters</h1>
                                {touched.targetNum && (
                                    <div className='i mb4 red'> {errors.targetNum}</div>
                                )}
                                <Input
                                    type='number'
                                    placeholder="Target Number"
                                    name="targetNum"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.targetNum}
                                />
                            </Form.Field>

                            <Form.Field>
                                {currType === 'petition' &&
                                    <Checkbox
                                        checked={currentAnonymity}
                                        onClick={() => toggleAnonymity()}
                                        label='Enable organizer anonymity' />
                                }

                                {currType === 'campaign' &&
                                    <div>
                                        <h1>Select a target end date for your campaign</h1>
                                        {touched.date_end && (
                                            <div className='i mb4 red'> {errors.date_end}</div>
                                        )}
                                        <Input
                                            type='date'
                                            name="date_end"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.date_end}
                                        />
                                    </div>
                                }
                            </Form.Field>

                            <Button.Group>
                                <Button
                                    labelPosition='left'
                                    icon='left chevron'
                                    onClick={() => navButton(1, values)}
                                    content='Previous' />
                                <Button
                                    labelPosition='right' icon='right chevron'
                                    onClick={handleSubmit}
                                    content='Next'
                                    type='submit' />
                            </Button.Group>
                        </Form>
                    );
                }}
            />
        );
    }
}
export default Form_Step2;