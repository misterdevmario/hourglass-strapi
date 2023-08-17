"use client";

import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./Login.module.css";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";


const validation = Yup.object().shape({
  identifier: Yup.string().required("*Campo requerido"),
  password: Yup.string().required("*Campo requerido"),
});

const Login = () => {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <Image src="/logo.svg" alt="logo" width={500} height={500} priority />
      <Formik
        initialValues={{
          identifier: "",
          password: "",
        }}
        validationSchema={validation}
        onSubmit={async (data, actions) => {
          try {
            const userAuth = await axios.post(
              `${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local`,
              data
            );
            if (userAuth.status === 200) {
              const response = await axios.post("/api/login", data);
              router.push('/editar/actividades')
            }
          } catch (error) {
            alert("Usuario o contraseña incorrecto");
          }

         
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

                <Field name="password" placeholder="contraseña" />
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
