import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Імпортуємо useNavigate
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { logIn } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Ініціалізуємо useNavigate

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        navigate('/contacts'); // Перенаправляємо на сторінку контактів після успішного логіну
      })
      .catch((error) => {
        console.error('Помилка логіну:', error); // Логування помилки
      });

    resetForm();
  };

  return (
    <div className={css.loginContainer}>
      <h2 className={css.title}>Log in</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string().email('Невірний email').required('Обов’язково'),
          password: Yup.string().min(6, 'Пароль має бути мінімум 6 символів').required('Обов’язково'),
        })}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
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
            Log in
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
