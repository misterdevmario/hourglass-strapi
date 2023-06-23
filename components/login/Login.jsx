"use client";

import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./Login.module.css";
import Image from "next/image";
import { useInfo } from "@/context/Context";

const validation = Yup.object().shape({
  identifier: Yup.string().required("*Campo requerido"),
  password: Yup.string().required("*Campo requerido"),
});

const Login = () => {
  const { token, getToken } = useInfo();
  return (
    <div className={styles.container}>
      <Image src="/logo.png" alt="logo" width={500} height={500} priority />
      <Formik
        initialValues={{
          identifier: "admin",
          password: "test1234",
        }}
        validationSchema={validation}
        onSubmit={async (data, actions) => {
       console.log(data)
          
        }}
      >
        {({ handlesubmit }) => (
          <div>
            <Form className={styles.form}>
              <h2>Inicio de sesión</h2>
              <div className={styles.inputs}>
                <Field name="identifier" placeholder="usuario" />
                <ErrorMessage
                  name="identifier"
                  component="p"
                  className={styles.error}
                />

                <Field
                  name="password"
                  
                  placeholder="contraseña"
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className={styles.error}
                />
              </div>

              <button className={styles.save} type="submit">
                Entrar
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Login;
