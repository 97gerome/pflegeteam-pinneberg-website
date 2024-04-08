import React from 'react';
import Form from './form';
import TextInput from './text-input';
import TextArea from './text-area';
import Button from './button';
import FileInput from './file-input';
import Checkbox from './checkbox';

const ExpressbewerbungForm = () => {
  return (
    <Form id="expressbewerbung_form">
      <h4>Expressbewerbung</h4>
      <p>
        Wenn Sie Freude an der Betreuung von Menschen haben, empathisch sind und
        gerne im Team arbeiten, dann freuen wir uns auf Ihre Bewerbung!
      </p>
      <TextInput id="als_input" label="Ich bewerbe mich als" />
      <TextInput id="ausbildung_input" label="Welche Ausbildung hast Du?" />
      <TextInput
        id="berufserfahrung_input"
        label="Wie viel Berufserfahrung hast Du bereits in der Pflege?"
      />
      <TextInput id="fuehrerschein_input" label="Hast Du einen Führerschein?" />
      <TextInput
        id="stellenumfang_input"
        label="Für welchen Stellenumfang interessierst Du dich?"
      />
      <TextInput id="vollstaendiger_name_input" label="Vollständiger Name" />
      <TextInput id="telefonnummer_input" label="Telefonnummer" />
      <TextInput id="email_input" label="E-Mail Adresse" />
      <TextArea
        id="was_noch_area"
        label="Was du uns noch sagen möchtest"
        rows={8}
      />
      <FileInput id="lebenslauf_input" label="Lebenslauf (optional)" />
      <FileInput id="anschreiben_input" label="Anschreiben (optional)" />
      <Checkbox
        id="zustimmen_checkbox"
        text="Ich stimme der Übermittlung und Verarbeitung meiner Nachricht gemäß der Datenschutzerklärung zu."
      />
      <div className="buttons-wrapper">
        <Button label="Jetzt Bewerben" />
      </div>
    </Form>
  );
};

export default ExpressbewerbungForm;
