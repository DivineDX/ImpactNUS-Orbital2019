import React from 'react';
import { Button, Form, Input } from 'semantic-ui-react'
import { Formik } from "formik";
import * as yup from "yup";
import InputErrorLabel from '../../Components/Label/InputErrorLabel';

const Form_Step1 = ({ navButton, toggleType, currState }) => (
    <Formik
        initialValues={{
            title: currState.title,
        }}

        onSubmit={(values) => {
            navButton(2, values);
        }}

        validationSchema={yup.object().shape({
            title: yup.string().required("This field is required")
                .min(10, "C'mon, your title cant possibly be that short (10 Charcters Minimum)")
                .max(150, "Please make your title shorter (150 Characters Maximum"),
        })}

        render={({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => {
            return (
                <Form size='huge'>
                    <Form.Field >
                        <h1 className='sizingg'>State your option</h1>
                        <Button.Group size='massive' >
                            <Button disabled={currState.isEditing} toggle active={currState.type === 'petition'} onClick={() => toggleType('petition')}>
                                Petition
                            </Button>
                            <Button.Or />
                            <Button disabled={currState.isEditing} toggle active={currState.type === 'campaign'} onClick={() => toggleType('campaign')}>Campaign</Button>
                        </Button.Group>
                    </Form.Field>

                    <Form.Field>
                        <h1 className='sizingg'>Title your petition/campaign</h1>
                        <Input
                            type='text'
                            placeholder="Use a simple & concise title that will effectively convey your message"
                            name="title"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title}
                            disabled={currState.isEditing}
                        />
                        <InputErrorLabel touched={touched.title} errors={errors.title} />
                    </Form.Field>

                    <Button
                        labelPosition='right' icon='right chevron'
                        onClick={handleSubmit}
                        content='Next'
                        type='submit'
                        className='formButton'
                    />
                </Form>
            );
        }}
    />
);

export default Form_Step1;