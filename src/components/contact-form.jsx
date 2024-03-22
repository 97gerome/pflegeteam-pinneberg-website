import React from 'react';
import Form from './form';
import TextInput from './text-input';
import Button from './button';
import TextArea from './text-area';

const ContactForm = () => {
  return (
    <Form id="contact_form">
      <h4>Kontaktform</h4>
      <TextInput id="name_input" label="Name" />
      <TextInput id="telefon_input" label="Telefon" />
      <TextInput id="email_input" label="E-mail Addresse" />
      <TextInput id="betreff_input" label="Betreff" />
      <TextArea id="nachricht_area" label="Nachricht" rows={8} />
      <div className="buttons-wrapper">
        <Button label="Senden" />
      </div>
    </Form>
  );
};

export default ContactForm;
