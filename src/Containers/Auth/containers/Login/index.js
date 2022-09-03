import style from "./Login.module.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actions } from "../../store";
import { ROUTES } from "../../../../routes/constants";

function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = {
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .min(3, "Password is too short - should be 3 chars minimum")
      .max(100, "Your password is very big!")
      .required("Password is required"),
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <section className={style["login-wrapper"]}>
      <div className={style["login_content"]}>
        <div className={style["login_content__title"]}>
          <h1>
            <span>Welcome to the </span>
            <span>Backoffice</span>
          </h1>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={yup.object().shape(validationSchema)}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              dispatch(
                actions.SIGN_IN.REQUEST(values, () =>
                  navigate(ROUTES.DASHBOARD, { replace: true })
                )
              );
              setSubmitting(false);
            }, 1000);
          }}
        >
          {({
            values,
            errors,
            isSubmitting,
            touched,
            handleChange,
            handleSubmit,
          }) => (
            <Form
              className={style["login_content__input"]}
              onSubmit={handleSubmit}
            >
              <Field
                name="email"
                id="email"
                label="Username"
                placeholder="Username"
                component={TextField}
                type="email"
                onChange={handleChange}
                value={values.email}
                style={{ marginBottom: "40px" }}
              />
              <Field
                name="password"
                id="password"
                label="Password"
                placeholder="Password"
                component={TextField}
                onChange={handleChange}
                type="password"
                value={values.password}
                style={{ marginBottom: "60px" }}
              />
              <div style={{ margin: "auto" }}>
                <LoginButton
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                >
                  Login
                </LoginButton>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}

const LoginButton = withStyles({
  root: {
    background: "#D9EBFF",
    borderRadius: "15px",
    border: 0,
    color: "#002FA4",
    height: 44,
    fontSize: "18px",
    lineHeight: "22px",
    letterSpacing: "-0.41px",
    fontWeight: 700,
    padding: "11px 67px",
    "&:hover": {
      background: "#A9EBFF",
    },
  },
  label: {
    textTransform: "none",
  },
})((props) => <Button {...props} />);

export default Login;
