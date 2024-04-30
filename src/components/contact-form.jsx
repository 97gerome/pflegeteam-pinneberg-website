import React from 'react';
import Form from './form';
import TextInput from './text-input';
import Button from './button';
import TextArea from './text-area';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import { generateUnitTag } from '../utils/wordpress';
import { ThreeDots } from 'react-loader-spinner';

const initialValues = {
  vollstaendiger_name: '',
  telefon: '',
  email: '',
  betreff: '',
  nachricht: '',
};

const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const validationSchema = yup.object({
  vollstaendiger_name: yup.string().required('Dies ist ein Pflichtfeld.'),
  telefon: yup
    .string()
    .matches(phoneRegExp, 'Bitte geben Sie eine gültige Telefonnummer ein.')
    .required('Dies ist ein Pflichtfeld.'),
  email: yup
    .string()
    .email('Bitte geben Sie eine gültige Email ein.')
    .required('Dies ist ein Pflichtfeld.'),
  betreff: yup.string().required('Dies ist ein Pflichtfeld.'),
  nachricht: yup.string().required('Dies ist ein Pflichtfeld.'),
});

const ContactForm = () => {
  const handleSubmit = async (data, formikBag) => {
    try {
      await axios({
        method: 'post',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        url: 'https://pflegeteam-pinneberg.de/api/wp-json/contact-form-7/v1/contact-forms/6/feedback',
        data: {
          ...data,
          _wpcf7_unit_tag: generateUnitTag(6),
        },
      });

      formikBag.resetForm();
      toast('Vielen Dank! Ihre Nachricht wurde gesendet.');
    } catch (error) {
      console.log(error);
      toast('Etwas ist schiefgelaufen. Versuchen Sie es erneut.');
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ values, errors, handleChange, submitForm, isSubmitting }) => (
        <Form id="contact_form">
          <h5>Kontaktform</h5>
          <TextInput
            id="name_input"
            label="Name"
            value={values.vollstaendiger_name}
            onChange={handleChange('vollstaendiger_name')}
            error={errors.vollstaendiger_name}
            disabled={isSubmitting}
          />
          <TextInput
            id="telefon_input"
            label="Telefon"
            type="tel"
            value={values.telefon}
            onChange={handleChange('telefon')}
            error={errors.telefon}
            disabled={isSubmitting}
          />
          <TextInput
            id="email_input"
            label="E-mail Addresse"
            type="email"
            value={values.email}
            onChange={handleChange('email')}
            error={errors.email}
            disabled={isSubmitting}
          />
          <TextInput
            id="betreff_input"
            label="Betreff"
            value={values.betreff}
            onChange={handleChange('betreff')}
            error={errors.betreff}
            disabled={isSubmitting}
          />
          <TextArea
            id="nachricht_area"
            label="Nachricht"
            rows={8}
            value={values.nachricht}
            onChange={handleChange('nachricht')}
            error={errors.nachricht}
            disabled={isSubmitting}
          />
          <div className="buttons-wrapper">
            <Button
              label={
                isSubmitting ? (
                  <ThreeDots color="white" height="40px" width="40px" />
                ) : (
                  'Senden'
                )
              }
              onClick={submitForm}
              disabled={isSubmitting}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
