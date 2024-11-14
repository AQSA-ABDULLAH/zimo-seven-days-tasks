import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function Form1({ onContinue }) {
  // Define validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    confirmEmail: Yup.string()
      .oneOf([Yup.ref('email'), null], 'Emails must match')
      .required('Confirm email is required'),
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    dob: Yup.date()
      .max(new Date(), 'Date of birth cannot be in the future')
      .required('Date of birth is required'),
    phone: Yup.string()
      .matches(
        /^[0-9]{10}$/,
        'Phone number must be 10 digits and contain only numbers'
      )
      .required('Phone number is required'),
    zarCode: Yup.string().notRequired(), // Optional field, no validation needed
  });

  // Handle form submission
  const handleSubmit = (values) => {
    console.log(values); // Or call onContinue() to proceed to next form
    onContinue();
  };

  return (
    <section>
      <div className="flex items-center justify-center sm:py-16 z-10 mt-[20px] lg:mt-[10px]">
        <Formik
          initialValues={{
            email: '',
            confirmEmail: '',
            firstName: '',
            lastName: '',
            dob: '',
            phone: '',
            zarCode: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form
              autoComplete="off"
              className="flex flex-col flex-1 items-center space-y-2 text-[18px] lg:text-[16px]"
            >
              <Field
                type="email"
                name="email"
                placeholder="EMAIL ADDRESS"
                className="tracking-[2px] md:tracking-[0px] w-[90%] placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] placeholder:md:tracking-[0px] max-w-[580px] text-center bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

              <Field
                type="email"
                name="confirmEmail"
                placeholder="CONFIRM EMAIL ADDRESS"
                className="tracking-[2px] md:tracking-[0px] w-[90%] placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] placeholder:md:tracking-[0px] max-w-[580px] text-center bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none"
              />
              <ErrorMessage name="confirmEmail" component="div" className="text-red-500 text-sm" />

              <Field
                type="text"
                name="firstName"
                placeholder="FIRST NAME"
                className="tracking-[2px] md:tracking-[0px] w-[90%] placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] placeholder:md:tracking-[0px] max-w-[580px] text-center bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none"
              />
              <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm" />

              <Field
                type="text"
                name="lastName"
                placeholder="LAST NAME (INCLUDING MIDDLE NAME)"
                className="tracking-[2px] md:tracking-[0px] w-[90%] placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] placeholder:md:tracking-[0px] max-w-[580px] text-center bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none"
              />
              <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm" />

              <Field
                type="date"
                name="dob"
                max="2050-12-25"
                title="Date of Birth"
                className="tracking-[2px] md:tracking-[0px] w-[90%] placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] placeholder:md:tracking-[0px] max-w-[580px] text-center bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none"
              />
              <ErrorMessage name="dob" component="div" className="text-red-500 text-sm" />

              <p className="text-black font-normal text-[18px] md:text-[12px] tracking-[2px] w-[90%] max-w-[580px] outline-none bg-transparent border placeholder:text-center text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] uppercase">
                Brazil
              </p>

              <Field
                type="tel"
                name="phone"
                placeholder="PHONE NUMBER"
                className="tracking-[2px] md:tracking-[0px] w-[90%] placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] placeholder:md:tracking-[0px] max-w-[580px] text-center bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none"
              />
              <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />

              <Field
                type="text"
                name="zarCode"
                placeholder="ZAR CODE (OPTIONAL)"
                className="tracking-[2px] md:tracking-[0px] placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] placeholder:md:tracking-[0px] w-full max-w-[580px] text-center bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none focus:bg-transparent"
              />
              <ErrorMessage name="zarCode" component="div" className="text-red-500 text-sm" />

              <div className="flex justify-around w-full pt-10">
                <button
                  type="submit"
                  className="lg:flex items-center justify-center hidden h-[120px] w-[120px] bg-black text-white tracking-widest text-[14px] rounded-lg text-center disabled:animate-pulse"
                >
                  CONTINUE
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}



