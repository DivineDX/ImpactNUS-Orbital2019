import React, { Component } from 'react';
import { Button, Checkbox, Form, Input } from 'semantic-ui-react'
import { Formik } from "formik";
import * as yup from "yup";
import Flatpickr from 'react-flatpickr'
import NumberSlider from '../../Components/Sliders/NumberSlider';
import InputErrorLabel from '../../Components/Label/InputErrorLabel';
import '../../../node_modules/flatpickr/dist/themes/material_blue.css';

class Form_Step2 extends Component {

    render() {
        const { navButton, toggleAnonymity, currState } = this.props;
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

                render={({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => {
                    return (
                        <Form size='huge'>
                            <Form.Field >
                                <h1 className='f2'>{target}</h1>
                                <Input
                                    type='text'
                                    name="recipient"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.recipient}
                                    placeholder={placeholder} />
                                <InputErrorLabel touched={touched.recipient} errors={errors.recipient} />
                            </Form.Field>

                            <Form.Field>
                                <h1 className='f2'>Target number of supporters</h1>
                                <NumberSlider
                                    min={10}
                                    max={2000}
                                    value={values.targetNum}
                                    name="targetNum"
                                    onChange={e => setFieldValue('targetNum', e)}
                                />
                            </Form.Field>

                            <Form.Field>
                                {currType === 'petition' &&
                                    <Checkbox
                                        checked={currState.anonymity}
                                        onClick={() => toggleAnonymity()}
                                        label='Enable organizer anonymity' />
                                }

                                {currType === 'campaign' &&
                                    <div>
                                        <h1 className='f2'>Target end date for your campaign</h1>
                                        <Flatpickr
                                            options={{ minDate: 'today', maxDate: new Date().fp_incr(365) }}
                                            placeholder="YYYY/MM/DD"
                                            onChange={e => setFieldValue('date_end', e[0])}
                                            onBlur={handleBlur}
                                            value={values.date_end}
                                            name="date_end"
                                            disabled={currState.isEditing}
                                        />
                                        <InputErrorLabel touched={touched.date_end} errors={errors.date_end} />
                                    </div>
                                }
                            </Form.Field>

                            <Button.Group>
                                <Button
                                    labelPosition='left'
                                    icon='left chevron'
                                    onClick={() => navButton(1, values)}
                                    className='formButton'
                                    content='Previous' />

                                <Button
                                    labelPosition='right' icon='right chevron'
                                    onClick={handleSubmit}
                                    content='Next'
                                    className='formButton'
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