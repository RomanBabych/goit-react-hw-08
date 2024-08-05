import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(login(values));
        setSubmitting(false);
      }}
    >
      <Form className={css.form}>
        <label htmlFor="email">Email</label>
        <Field name="email" type="email" className={css.email} />
        <ErrorMessage name="email" component="div" className={css.error} />

        <label htmlFor="password">Password</label>
        <Field name="password" type="password" className={css.password} />
        <ErrorMessage name="password" component="div" className={css.error} />

        <button className={css.loginBtn} type="submit">
          Login
        </button>
      </Form>
    </Formik>
  );
}
