import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations'; 
import css from './RegistrationForm.module.css'; 


const RegistrationSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Занадто коротке!').required('Обов’язково'),
  email: Yup.string().email('Невірний email').required('Обов’язково'),
  password: Yup.string().min(6, 'Пароль має бути мінімум 6 символів').required('Обов’язково'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch(); 
  
  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values)); 
    resetForm(); 
  };

  return (
    <div className={css.registrationContainer}>
      <h2 className={css.title}>Registration</h2>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={RegistrationSchema}
        onSubmit={handleSubmit}
      >
              <Form className={css.form}>

          <label className={css.label}>
            Name 
            <Field className={css.inputForm} type="text" name="name" />
            <ErrorMessage name="name" component="div" className={css.error} />
          </label>
          
          <label className={css.label}>
            Email
            <Field className={css.inputForm} type="email" name="email" />
            <ErrorMessage name="email" component="div" className={css.error} />
          </label>

          <label className={css.label}>
            Password
            <Field className={css.inputForm} type="password" name="password" />
            <ErrorMessage name="password" component="div" className={css.error} />
          </label>

          <button className={css.submitButton} type="submit">
            Registrating
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
