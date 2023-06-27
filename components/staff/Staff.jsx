"use client";

import Image from "next/image";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useInfo } from "@/context/Context";
import { useModal } from "../modal/useModal";
import { useState } from "react";
import Modal from "../modal/Modal";
import StaffGallery from "./gallery/StaffGallery";
import { RiImageAddLine } from "react-icons/ri";
import styles from "./Staff.module.css";

const validation = Yup.object().shape({
  name: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  position: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
});

const Staff = () => {
  const { info, updateStaff, postStaff, deleteStaff, staffImage } = useInfo();
  const [id, setId] = useState("");
  const [isOpenGallery, openGallery, closeGallery] = useModal(true);
  return (
    <div className={styles.container}>
      {info.staff.map((item, i) => (
        <Formik
          key={item.id}
          initialValues={{
            name: item.attributes.name,
            position: item.attributes.position,
          }}
          validationSchema={validation}
          onSubmit={async (data, actions) => {
            await updateStaff(data, item.id);
          }}
        >
          {({ handlesubmit }) => (
            <div key={item.id}>
              <Form className={styles.form}>
                <div className={styles.inputs}>
                  <Field name="name" placeholder="nombre" />
                  <ErrorMessage
                    name="name"
                    component="p"
                    className={styles.error}
                  />
                  <Field name="position" placeholder="posición" />
                  <ErrorMessage
                    name="position"
                    component="p"
                    className={styles.error}
                  />

                  <button className={styles.save} type="submit">
                    Guardar
                  </button>
                  {info.staff.length > 1 ? (
                    <button
                      type="button"
                      className={styles.delete}
                      onClick={() => deleteStaff(item.id)}
                    >
                      Eliminar
                    </button>
                  ) : null}
                </div>
                <Image
                  className={styles.form_image}
                  src={item.attributes.staffImg}
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
          name: "",
          staffImg: "",
        }}
        validationSchema={validation}
        onSubmit={async (data, { resetForm }) => {
          data.staffImg = staffImage;
          await postStaff(data);
          resetForm({ values: "" });
        }}
      >
        {({ handleSubmit }) => (
          <div>
            <Form className={styles.form}>
              <div className={styles.inputs}>
                <Field name="name" placeholder="nombre" />
                <ErrorMessage
                  component="p"
                  className={styles.error}
                  name="name"
                />
                <Field name="position" placeholder="posición" />
                <ErrorMessage
                  name="position"
                  component="p"
                  className={styles.error}
                />
                <button
                  className={styles.save}
                  disabled={!staffImage}
                  type="submit"
                >
                  Guardar
                </button>
              </div>

              {!staffImage ? (
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
                  src={staffImage}
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
              <StaffGallery id={id} closeModal={closeGallery} />
            </Modal>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Staff;
