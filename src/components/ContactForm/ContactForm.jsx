import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from 'Redux/operations';
import { FormContainer, FormLabel, FormButton } from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup
    .string()
    .required()
    .matches(
      "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  phone: yup
    .string()
    .required()
    .matches(
      '\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}',
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = ({ name, phone }, { resetForm }) => {
    dispatch(addContact({ name, phone }));
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormContainer>
        <Form autoComplete="off">
          <FormLabel htmlFor="name">
            Name
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </FormLabel>
          <FormLabel htmlFor="phone">
            Number
            <Field type="tel" name="phone" />
            <ErrorMessage name="phone" component="div" />
          </FormLabel>
          <FormButton type="submit">Add contact</FormButton>
        </Form>
      </FormContainer>
    </Formik>
  );
};

export default ContactForm;
