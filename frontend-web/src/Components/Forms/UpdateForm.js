import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Button, Form } from "semantic-ui-react";
import InputErrorLabel from '../Label/InputErrorLabel';

const UpdateForm = ({ submitUpdate, updatePosted, authFailed }) => (
    <Formik
        initialValues={{
            title: "",
            description: "",
        }}
        onSubmit={(values, actions) => {
            setTimeout(() => {
                submitUpdate(values);
                actions.setSubmitting(false);
                actions.resetForm();
            }, 2000);
        }}
        validationSchema={yup.object().shape({
            title: yup.string().required("This field is required")
                .min(5, "C'mon, your title cant possibly be that short (150 Charcters Maximum)")
                .max(150, "Please make your title shorter"),
            description: yup.string().required("This field is required")
        })}
        render={({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => {
            return (
                <Form className='mh2'>
                    <Form.Field className="formfieldstyle">
                        <h3 className='tc'>Title of Update</h3>
                        <input
                            type='text'
                            placeholder="Title"
                            name="title"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title}
                        />
                        <InputErrorLabel touched={touched.title} errors={errors.title} />
                    </Form.Field>

                    <Form.Field>
                        <h3 className='tc'> Description of Update</h3>
                        <textarea
                            placeholder="Description"
                            name="description"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description}
                        />
                        <InputErrorLabel touched={touched.description} errors={errors.description} />
                    </Form.Field>
                    {updatePosted
                        ? <h3>Update posted! Click anywhere out of the modal to exit</h3>
                        : <div></div>
                    }
                    
                    {authFailed
                        ? <h3 className = 'red'>User Authentication Error</h3>
                        : <div></div>
                    }

                    <Button type="submit" onClick={handleSubmit} disabled={isSubmitting}>
                        Submit
                    </Button>
                </Form>
            );
        }}
    />
);

export default UpdateForm;