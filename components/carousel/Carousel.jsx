import Image from "next/image";
import styles from "./Carousel.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useInfo } from "@/context/Context";
import Modal from "../modal/Modal";
import ActivitiesGallery from "../activitiesGallery/ActivitiesGallery";
import { useModal } from "../modal/useModal";
import { useState } from "react";
import { RiImageAddLine } from "react-icons/ri";

const validation = Yup.object().shape({
  activitieEn: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  activitieEs: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),

  hours: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  spotEn: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  spotEs: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
});

const Carousel = ({ activities }) => {
  const { updateActivity, image, postActivity, deleteActivity } = useInfo();
  const [id, setId] = useState("");
  console.log(id)
  const [isOpenGallery, openGallery, closeGallery] = useModal(true);

  return (
    <div className={styles.container}>
      {activities.map((item, i) => (
       
        <Formik
          key={item.id}
          initialValues={{
            activitieEn: item.attributes.activitieEn.toUpperCase(),
            activitieEs: item.attributes.activitieEs.toUpperCase(),
            hours: item.attributes.hours.toUpperCase(),
            spotEn: item.attributes.spotEn.toUpperCase(),
            spotEs: item.attributes.spotEs.toUpperCase(),
          }}
          validationSchema={validation}
          onSubmit={async (data, actions) => {
            await updateActivity(data, item.id);
          }}
        >
          {({ handleSubmit }) => (
            <div key={item.id}>
              <Form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputs}>
                  <Field name="hours" placeholder={`"Horario" ${item.id}`} />
                  <ErrorMessage
                    component="p"
                    className={styles.error}
                    name="hours"
                  />
                  <Field name="activitieEn" placeholder="Actividad Ingles" />
                  <ErrorMessage
                    component="p"
                    className={styles.error}
                    name="activitieEn"
                  />
                  <Field name="activitieEs" placeholder="Actividad Español" />
                  <ErrorMessage
                    component="p"
                    className={styles.error}
                    name="activitieEs"
                  />
                  <Field name="spotEn" placeholder="Locacion Ingles" />
                  <ErrorMessage
                    component="p"
                    className={styles.error}
                    name="spotEn"
                  />
                  <Field name="spotEs" placeholder="Locacion Español" />
                  <ErrorMessage
                    component="p"
                    className={styles.error}
                    name="spotEs"
                  />
                  <button className={styles.save} type="submit">Guardar</button>
                  {i == activities.length -1 && activities.length > 14 ?  <button disabled={activities.length <= 14} className={styles.delete} onClick={()=>deleteActivity(item.id)}>Eliminar</button> : null}
                </div>
                <Image
                  className={styles.form_image}
                  src={item.attributes.activitieImage}
                  alt="activity"
                  width={200}
                  height={250}
                  priority
                  onClick={() => {
                    openGallery();
                    setId(item.id);
                  }}
                />
                <Modal isOpen={isOpenGallery} closeModal={closeGallery}>
                  <ActivitiesGallery id={id} closeModal={closeGallery} />
                </Modal>
              </Form>
            </div>
          )}
        </Formik>
       
      ))}
      <Formik
        initialValues={{
          activitieEn: "",
          activitieEs: "",
          activitieImage: "",
          hours: "",
          spotEn: "",
          spotEs: "",
        }}
        validationSchema={validation}
        onSubmit={async (data, { resetForm }) => {
          data.activitieImage = image
          await postActivity(data);
          resetForm({ values: "" });
        }}
      >
        {({ handleSubmit }) => (
          <div>
            <Form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputs}>
                <Field name="hours" placeholder="Horario" />
                <ErrorMessage
                  component="p"
                  className={styles.error}
                  name="hours"
                />
                <Field name="activitieEn" placeholder="Actividad Ingles" />
                <ErrorMessage
                  component="p"
                  className={styles.error}
                  name="activitieEn"
                />
                <Field name="activitieEs" placeholder="Actividad Español" />
                <ErrorMessage
                  component="p"
                  className={styles.error}
                  name="activitieEs"
                />
                <Field name="spotEn" placeholder="Locacion Ingles" />
                <ErrorMessage
                  component="p"
                  className={styles.error}
                  name="spotEn"
                />
                <Field name="spotEs" placeholder="Locacion Español" />
                <ErrorMessage
                  component="p"
                  className={styles.error}
                  name="spotEs"
                />
                <button className={styles.save} disabled={!image} type="submit">
                  Guardar
                </button>
              </div>
              {!image ? (
                <div className="flex items-center justify-center w-1/2 h-12">
                  <RiImageAddLine
                    size={80}
                    onClick={() => {
                      openGallery();
                      setId(null)

                    }}
                  />
                </div>
              ) : (
                <Image
                  className={styles.post_form_image}
                  src={image}
                  alt="activity"
                  width={200}
                  height={250}
                  priority
                  onClick={() => {
                    openGallery();
                    setId(null)

                  }}
                />
              )}

              <Modal isOpen={isOpenGallery} closeModal={closeGallery}>
                <ActivitiesGallery id={id} closeModal={closeGallery} />
              </Modal>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Carousel;

// {activities.map((item) => (
//   <div key={item.id} className="card_container">
//     <Image
//       src={item.attributes.activitieImage}
//       width={200}
//       height={250}
//       alt=""
//     />
//     <div className="hours">{item.attributes.hours}</div>
//     <div className="activity">{item.attributes.activitieEn}</div>
//     <div className="activity">{item.attributes.activitieEs}</div>
//     <div className="location">{item.attributes.spotEn}</div>
//     <div className="location">{item.attributes.spotEs}</div>
//   </div>
// ))}
