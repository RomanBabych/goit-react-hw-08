import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(register(values));
        setSubmitting(false);
      }}
    >
      <Form className={css.form}>
        <label htmlFor="name">Name</label>
        <Field name="name" type="text" className={css.username} />
        <ErrorMessage name="name" component="div" className={css.error} />

        <label htmlFor="email">Email</label>
        <Field name="email" type="email" className={css.email} />
        <ErrorMessage name="email" component="div" className={css.error} />

        <label htmlFor="password">Password</label>
        <Field name="password" type="password" className={css.password} />
        <ErrorMessage name="password" component="div" className={css.error} />

        <button className={css.regBtn} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}
