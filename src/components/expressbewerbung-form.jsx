import React, { useState } from 'react';
import Form from './form';
import TextInput from './text-input';
import TextArea from './text-area';
import Button from './button';
import Checkbox from './checkbox';
import { Formik } from 'formik';
import * as yup from 'yup';
import { phoneRegExp } from '../utils/reg-exp';
import { generateUnitTag } from '../utils/wordpress';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Bars } from 'react-loader-spinner';

const initialValues = {
  als: '',
  ausbildung: '',
  berufserfahrung: '',
  fuehrerschein: '',
  stellenumfang: '',
  vollstaendiger_name: '',
  telefon: '',
  email: '',
  nachricht: '',
};

const validationSchema = yup.object({
  als: yup.string().required('Dies ist ein Pflichtfeld.'),
  ausbildung: yup.string().required('Dies ist ein Pflichtfeld.'),
  berufserfahrung: yup.string().required('Dies ist ein Pflichtfeld.'),
  fuehrerschein: yup.string().required('Dies ist ein Pflichtfeld.'),
  stellenumfang: yup.string().required('Dies ist ein Pflichtfeld.'),
  vollstaendiger_name: yup.string().required('Dies ist ein Pflichtfeld.'),
  telefon: yup
    .string()
    .matches(phoneRegExp, 'Bitte geben Sie eine gültige Telefonnummer ein.')
    .required('Dies ist ein Pflichtfeld.'),
  email: yup
    .string()
    .email('Bitte geben Sie eine gültige Email ein.')
    .required('Dies ist ein Pflichtfeld.'),
  nachricht: yup.string(),
});

const ExpressbewerbungForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = async (data, formikBag) => {
    try {
      await axios({
        method: 'post',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        url: 'https://pflegeteam-pinneberg.de/api/wp-json/contact-form-7/v1/contact-forms/17/feedback',
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

  const handleCheck = () => {
    setIsChecked((current) => !current);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ values, errors, handleChange, submitForm, isSubmitting }) => {
        return (
          <Form id="expressbewerbung_form">
            <h5>Expressbewerbung</h5>
            <p>
              Wenn Sie Freude an der Betreuung von Menschen haben, empathisch
              sind und gerne im Team arbeiten, dann freuen wir uns auf Ihre
              Bewerbung!
            </p>
            <TextInput
              id="als_input"
              label="Ich bewerbe mich als"
              value={values.als}
              onChange={handleChange('als')}
              error={errors.als}
              disabled={isSubmitting}
            />
            <TextInput
              id="ausbildung_input"
              label="Welche Ausbildung hast Du?"
              value={values.ausbildung}
              onChange={handleChange('ausbildung')}
              error={errors.ausbildung}
              disabled={isSubmitting}
            />
            <TextInput
              id="berufserfahrung_input"
              label="Wie viel Berufserfahrung hast Du bereits in der Pflege?"
              value={values.berufserfahrung}
              onChange={handleChange('berufserfahrung')}
              error={errors.berufserfahrung}
              disabled={isSubmitting}
            />
            <TextInput
              id="fuehrerschein_input"
              label="Hast Du einen Führerschein?"
              value={values.fuehrerschein}
              onChange={handleChange('fuehrerschein')}
              error={errors.fuehrerschein}
              disabled={isSubmitting}
            />
            <TextInput
              id="stellenumfang_input"
              label="Für welchen Stellenumfang interessierst Du dich?"
              value={values.stellenumfang}
              onChange={handleChange('stellenumfang')}
              error={errors.stellenumfang}
              disabled={isSubmitting}
            />
            <TextInput
              id="vollstaendiger_name_input"
              label="Vollständiger Name"
              value={values.vollstaendiger_name}
              onChange={handleChange('vollstaendiger_name')}
              error={errors.vollstaendiger_name}
              disabled={isSubmitting}
            />
            <TextInput
              id="telefonnummer_input"
              label="Telefonnummer"
              value={values.telefon}
              onChange={handleChange('telefon')}
              error={errors.telefon}
              disabled={isSubmitting}
            />
            <TextInput
              id="email_input"
              label="E-Mail Adresse"
              value={values.email}
              onChange={handleChange('email')}
              error={errors.email}
              disabled={isSubmitting}
            />
            <TextArea
              id="was_noch_area"
              label="Was du uns noch sagen möchtest"
              rows={8}
              value={values.nachricht}
              onChange={handleChange('nachricht')}
              error={errors.nachricht}
              disabled={isSubmitting}
            />
            <Checkbox
              id="zustimmen_checkbox"
              text="Ich stimme der Übermittlung und Verarbeitung meiner Nachricht gemäß der Datenschutzerklärung zu."
              checked={isChecked}
              onChange={handleCheck}
              disabled={isSubmitting}
            />
            <div className="buttons-wrapper">
              <Button
                label={
                  isSubmitting ? (
                    <Bars color="white" height="28px" width="28px" />
                  ) : (
                    'Jetzt Bewerben'
                  )
                }
                onClick={submitForm}
                disabled={!isChecked || isSubmitting}
              />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ExpressbewerbungForm;
