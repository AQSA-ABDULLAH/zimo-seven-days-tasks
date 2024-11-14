"use client";

import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function Form1({ onContinue }) {
    const [showErrors, setShowErrors] = useState(false);

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Email is required'),
        confirmEmail: Yup.string()
            .oneOf([Yup.ref('email'), null], 'Emails must match')
            .required('Confirm your email'),
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        dob: Yup.date().required('Date of birth is required').nullable(),
        phone: Yup.string()
            .matches(/^\d+$/, 'Phone number must contain only numbers')
            .required('Phone number is required'),
        zarCode: Yup.string().optional(),
    });

    const [formData, setFormData] = useState({
        email: '',
        confirmEmail: '',
        firstName: '',
        lastName: '',
        dob: '',
        phone: '',
        zarCode: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <section>
            <div className='flex items-center justify-center sm:py-16 z-10 mt-[20px] lg:mt-[10px]'>
                <Formik
                    initialValues={{
                        email: '',
                        confirmEmail: '',
                        firstName: '',
                        lastName: '',
                        dob: '',
                        phone: '',
                        zarCode: ''
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        setShowErrors(false);

                        // Proceed with onContinue if there are no errors
                        if (Object.keys(values).every((key) => values[key])) {
                            onContinue();
                        } else {
                            setShowErrors(true);
                        }

                        setSubmitting(false);
                    }}
                >
                    {({ handleSubmit, isSubmitting, isValid }) => (
                        <Form onSubmit={handleSubmit} className="flex flex-col flex-1 items-center space-y-2 text-[18px] lg:text-[16px]">
                            <Field
                                id="email"
                                name="email"
                                placeholder="EMAIL ADDRESS"
                                className="tracking-[2px] md:tracking-[0px] w-[90%] placeholder:text-black placeholder:font-normal 
                                placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] 
                                placeholder:md:tracking-[0px] max-w-[580px] text-center bg-transparent border 
                                placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent 
                                outline-none"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                            <div className="w-[90%] max-w-[580px] relative">
                                <Field
                                    type="email"
                                    name="confirmEmail"
                                    placeholder="CONFIRM EMAIL ADDRESS"
                                    className="tracking-[2px] md:tracking-[0px] placeholder:text-black placeholder:font-normal 
                                                          placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] 
                                                          placeholder:md:tracking-[0px] w-full text-center focus:bg-transparent bg-transparent border 
                                                          placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none"
                                    value={formData.confirmEmail}
                                    onChange={handleChange}
                                />
                                <ErrorMessage name="confirmEmail" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div className="w-[90%] max-w-[580px] relative">
                                <Field
                                    type="text"
                                    name="firstName"
                                    placeholder="FIRST NAME"
                                    className="tracking-[2px] md:tracking-[0px] placeholder:text-black placeholder:font-normal 
                            placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] 
                            placeholder:md:tracking-[0px] focus:bg-transparent w-full text-center bg-transparent border 
                            placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                                <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div className="w-[90%] max-w-[580px] relative">
                                <Field
                                    type="text"
                                    name="lastName"
                                    placeholder="LAST NAME (INCLUDING MIDDLE NAME)"
                                    className="tracking-[2px] md:tracking-[0px] placeholder:text-black placeholder:font-normal 
                            placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] 
                            placeholder:md:tracking-[0px] focus:bg-transparent w-full text-center bg-transparent border 
                            placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="w-[90%] max-w-[580px] relative">
                                <Field
                                    type="date"
                                    name="dob"
                                    title="Date of Birth"
                                    max="2050-12-25"
                                    step="1"
                                    className="w-full tracking-[2px] md:tracking-[0px] font-normal placeholder:text-black 
                            placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[12px] 
                            placeholder:tracking-[2px] placeholder:md:tracking-[0px] text-center uppercase bg-transparent border
                            placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none 
                            focus:bg-transparent"
                                    value={formData.dob}
                                    onChange={handleChange}
                                />
                                <ErrorMessage name="dob" component="div" className="text-red-500 text-sm" />
                            </div>

                            <p className="text-black font-normal text-[18px] md:text-[12px] tracking-[2px] 
                   w-[90%] max-w-[580px] outline-none bg-transparent border placeholder:text-center text-center 
                    border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] uppercase">
                                Brazil
                            </p>

                            <div className="w-[90%] max-w-[580px] relative">
                                <Field
                                    type="text"
                                    name="phone"
                                    placeholder="PHONE NUMBER"
                                    className="tracking-[2px] md:tracking-[0px] placeholder:text-black placeholder:font-normal 
                                 placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] 
                                 placeholder:md:tracking-[0px] w-full max-w-[580px] text-center 
                                 bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 
                                 focus:border-[#BE9F56] outline-none focus:bg-transparent"
                                    value={formData.zarCode}
                                    onChange={handleChange} />
                                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
                            </div>




                            <Field
                                type="text"
                                name="zarCode"
                                placeholder="ZAR CODE (OPTIONAL)"
                                className="tracking-[2px] md:tracking-[0px] placeholder:text-black placeholder:font-normal 
                                placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] 
                                placeholder:md:tracking-[0px] w-full max-w-[580px] text-center 
                                bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 
                                focus:border-[#BE9F56] outline-none focus:bg-transparent"
                                value={formData.zarCode}
                                onChange={handleChange}
                            />
                            <ErrorMessage name="zarCode" component="div" className="text-red-500 text-sm" />

                            <button
                                type="submit"
                                disabled={!isValid || isSubmitting}
                                className='h-[120px] w-[120px] bg-black text-white tracking-widest text-[14px] rounded-lg flex items-center text-center justify-center uppercase'
                            >
                                CONTINUE
                            </button>
                            {showErrors && (
                                <div className="text-red-500 text-sm mt-2">Please correct the errors above to continue.</div>
                            )}
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    );
}






