"use client";

import Image from "next/image";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useInfo } from "@/context/Context";
import { useModal } from "../modal/useModal";
import { useState } from "react";
import Modal from "../modal/Modal";
import styles from "./Bars.module.css";
import BarsGallery from "./gallery/BarsGallery";

const validation = Yup.object().shape({
  name: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  hours: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
});

const Bars = () => {
  const { info, updateBar } = useInfo();
  const [id, setId] = useState("");
  const [isOpenGallery, openGallery, closeGallery] = useModal(true);
  return (
    <div className={styles.container}>
      {info.bars.map((item) => (
        <Formik
          key={item.id}
          initialValues={{
            name: item.attributes.name.toUpperCase(),
            hours: item.attributes.hours.toUpperCase(),
          }}
          validationSchema={validation}
          onSubmit={async (data, actions) => {
           await updateBar(data, item.id)
          }}
        >
          {({ handlesubmit }) => (
            <div key={item.id}>
              <Form className={styles.form}>
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

                <Image
                  src={item.attributes.barImg}
                  alt="bar"
                  width={200}
                  height={250}
                  priority
                  onClick={() => {
                    openGallery();
                    setId(item.id);
                  }}
                />
                   <button className={styles.save} type="submit">
                    Guardar
                  </button>
              </Form>
            </div>
          )}
        </Formik>
      ))}
      <Modal isOpen={isOpenGallery} closeModal={closeGallery}>
        <BarsGallery id={id} closeModal={closeGallery} />
      </Modal>
    </div>
  );
};

export default Bars;
