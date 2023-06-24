"use client";

import Image from "next/image";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useInfo } from "@/context/Context";
import { useModal } from "../modal/useModal";
import { useState } from "react";
import Modal from "../modal/Modal";
import FlyersGallery from "./gallery/FlyersGallery";
import { RiImageAddLine } from "react-icons/ri";
import styles from "./Flyers.module.css";

const validation = Yup.object().shape({
  nameEn: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  hours: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  nameEs: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  spotEn: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  spotEs: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
});

const Flyers = () => {
  const { info, updateFlyer, postFlyer, deleteFlyer, flyerImage } = useInfo();
  const [id, setId] = useState("");
  const [isOpenGallery, openGallery, closeGallery] = useModal(true);
  return (
    <div className={styles.container}>
      {info.flyers.map((item, i) => (
        <Formik
          key={item.id}
          initialValues={{
            hours: item.attributes.hours,
            nameEn: item.attributes.nameEn,
            nameEs: item.attributes.nameEs,
            spotEn: item.attributes.spotEn,
            spotEs: item.attributes.spotEs,
          }}
          validationSchema={validation}
          onSubmit={async (data, actions) => {
            await updateFlyer(data, item.id);
          }}
        >
          {({ handlesubmit }) => (
            <div key={item.id}>
              <Form className={styles.form}>
                <div className={styles.inputs}>
                <Field name="hours" placeholder="horario" />
                  <ErrorMessage
                    name="hours"
                    component="p"
                    className={styles.error}
                  />
                  <Field name="nameEn" placeholder="nombre ingles" />
                  <ErrorMessage
                    name="nameEn"
                    component="p"
                    className={styles.error}
                  />
                  <Field name="nameEs" placeholder="nombre español" />
                  <ErrorMessage
                    name="nameEs"
                    component="p"
                    className={styles.error}
                  />
                  <Field name="spotEn" placeholder="locacion ingles" />
                  <ErrorMessage
                    name="spotEn"
                    component="p"
                    className={styles.error}
                  />
                  <Field name="spotEs" placeholder="locacion español" />
                  <ErrorMessage
                    name="spotEs"
                    component="p"
                    className={styles.error}
                  />

                  <button className={styles.save} type="submit">
                    Guardar
                  </button>
                  {info.flyers.length > 1 ? (
                    <button
                      type="button"
                      className={styles.delete}
                      onClick={() => deleteFlyer(item.id)}
                    >
                      Eliminar
                    </button>
                  ) : null}
                </div>
                <Image
                  className={styles.form_image}
                  src={item.attributes.flyerImg}
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
            </div>
          )}
        </Formik>
      ))}

      <Formik
        initialValues={{
          hours:"",
          nameEn: "",
          nameEs: "",
          spotEn: "",
          spotEs: "",
        }}
        validationSchema={validation}
        onSubmit={async (data, { resetForm }) => {
          data.flyerImg = flyerImage;
          await postFlyer(data);
          resetForm({ values: "" });
        }}
      >
        {({ handleSubmit }) => (
          <div>
            <Form className={styles.form}>
              <div className={styles.inputs}>
              <Field name="hours" placeholder="horario" />
                <ErrorMessage
                  name="hours"
                  component="p"
                  className={styles.error}
                />
                <Field name="nameEn" placeholder="nombre ingles" />
                <ErrorMessage
                  name="nameEn"
                  component="p"
                  className={styles.error}
                />
                <Field name="nameEs" placeholder="nombre español" />
                <ErrorMessage
                  name="nameEs"
                  component="p"
                  className={styles.error}
                />
                <Field name="spotEn" placeholder="locacion ingles" />
                <ErrorMessage
                  name="spotEn"
                  component="p"
                  className={styles.error}
                />
                <Field name="spotEs" placeholder="locacion español" />
                <ErrorMessage
                  name="spotEs"
                  component="p"
                  className={styles.error}
                />
                <button
                  className={styles.save}
                  disabled={!flyerImage}
                  type="submit"
                >
                  Guardar
                </button>
              </div>

              {!flyerImage ? (
                <div className="flex items-center justify-center w-1/2 h-12">
                  <RiImageAddLine
                    size={80}
                    onClick={() => {
                      openGallery();
                      setId(null);
                    }}
                  />
                </div>
              ) : (
                <Image
                  className={styles.post_form_image}
                  src={flyerImage}
                  alt="staff"
                  width={200}
                  height={250}
                  priority
                  onClick={() => {
                    openGallery();
                    setId(null);
                  }}
                />
              )}
            </Form>
            <Modal isOpen={isOpenGallery} closeModal={closeGallery}>
              <FlyersGallery id={id} closeModal={closeGallery} />
            </Modal>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Flyers;
