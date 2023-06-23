"use client";
import Image from "next/image";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useInfo } from "@/context/Context";
import { useModal } from "../modal/useModal";
import { useState } from "react";
import Modal from "../modal/Modal";
import RestaurantsGallery from "./gallery/BreakfastGallery";
import styles from "./Breakfast.module.css";

const validation = Yup.object().shape({
  name: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  hours: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  membersEn: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  membersEs: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  serviceEn: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  serviceEs: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  typeEs: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  typeEn: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  typeEs: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
});

const Dinning = () => {
  const { info, updateBrakfast } = useInfo();
  const [id, setId] = useState("");
  const [isOpenGallery, openGallery, closeGallery] = useModal(true);
  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        {info.breakfast.map((item) => (
          <Formik
            key={item.id}
            initialValues={{
              name: item.attributes.name,
              hours: item.attributes.hours,
              membersEn: item.attributes.membersEn,
              membersEs: item.attributes.membersEs,
              serviceEn: item.attributes.serviceEn,
              serviceEs: item.attributes.serviceEs,
              typeEn: item.attributes.typeEn,
              typeEs: item.attributes.typeEs,
            }}
            validationSchema={validation}
            onSubmit={async (data, actions) => {
              await updateBrakfast(data, item.id);
            }}
          >
            {({ handlesubmit }) => (
              <Form className={styles.form}>
                <div className={styles.inputs}>
                  <Field name="name" placeholder="nombre" />
                  <ErrorMessage
                    name="name"
                    component="p"
                    className={styles.error}
                  />

                  <Field name="hours" placeholder="horario" />
                  <ErrorMessage
                    name="hours"
                    component="p"
                    className={styles.error}
                  />
                  <Field name="typeEn" placeholder="type" />
                  <ErrorMessage
                    name="typeEn"
                    component="p"
                    className={styles.error}
                  />
                  <Field name="typeEs" placeholder="tipo" />
                  <ErrorMessage
                    name="typeEs"
                    component="p"
                    className={styles.error}
                  />
                  <Field name="serviceEn" placeholder="service" />
                  <ErrorMessage
                    name="serviceEn"
                    component="p"
                    className={styles.error}
                  />
                  <Field name="serviceEs" placeholder="servicio" />
                  <ErrorMessage
                    name="serviceEs"
                    component="p"
                    className={styles.error}
                  />
                  <Field name="membersEn" placeholder="members" />
                  <ErrorMessage
                    name="membersEn"
                    component="p"
                    className={styles.error}
                  />
                  <Field name="membersEs" placeholder="miembros" />
                  <ErrorMessage
                    name="membersEs"
                    component="p"
                    className={styles.error}
                  />

                  <button className={styles.save} type="submit">
                    Guardar
                  </button>
                </div>
                <Image
                  src={item.attributes.breakfastImg}
                  alt="bar"
                  width={200}
                  height={250}
                  priority
                  onClick={() => {
                    openGallery();
                    setId(item.id);
                  }}
                />
              </Form>
            )}
          </Formik>
        ))}
        <Modal isOpen={isOpenGallery} closeModal={closeGallery}>
          <RestaurantsGallery id={id} closeModal={closeGallery} />
        </Modal>
      </div>
    </div>
  );
};

export default Dinning;
