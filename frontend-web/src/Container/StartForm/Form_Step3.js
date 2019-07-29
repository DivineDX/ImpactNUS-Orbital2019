import React from 'react';
import { Button, Form, Input } from 'semantic-ui-react'
import { Formik } from "formik";
import * as yup from "yup";
import TextEditor from '../../Components/TextEditor/TextEditor';
import InputErrorLabel from '../../Components/Label/InputErrorLabel';

const Form_Step3 = ({ navButton, currState }) => (
    <Formik
        initialValues={{
            description: currState.description,
            imageURL: currState.imageURL,
        }}

        onSubmit={(values) => {
            navButton(4, values);
        }}

        validationSchema={yup.object().shape({
            imageURL: yup.string().url("This is not a url!"),
        })}

        render={({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => {
            return (
                <Form size='huge'>
                    <Form.Field>
                        <h1 className='sizingg'>Image (Optional but highly recommended)</h1>
                        <Input
                            type='text'
                            placeholder="Link to an image hosting site"
                            name="imageURL"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.imageURL}
                        />
                        <InputErrorLabel touched={touched.imageURL} errors={errors.imageURL} />
                    </Form.Field>

                    <Form.Field >
                        <h1 className='sizingg'>Detailed description of your {currState.type}</h1>
                        <div className="field" rows="3">
                            <TextEditor
                                placeholder="Tell your story..."
                                name="description"
                                onChange={e => setFieldValue('description', e)}
                                value={values.description}
                            />
                        </div>      
                    </Form.Field>

                    <Button.Group>
                        <Button
                            labelPosition='left'
                            icon='left chevron'
                            onClick={() => navButton(2, values)}
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

export default Form_Step3;