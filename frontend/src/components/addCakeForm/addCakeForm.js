import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const fields = {
  CAKE_NAME: "cakeName",
  COMMENT: "comment",
  YUMFACTOR: "yumFactor",
  IMAGE_URL: "imageUrl",
};

const initialValues = {
  cakeName: "",
  comment: "",
  yumFactor: "",
  imageUrl: "",
};

const validationSchema = Yup.object({
  cakeName: Yup.string().required("Required"),
  comment: Yup.string().required("Required"),
  yumFactor: Yup.string().required("Required"),
  imageUrl: Yup.string().required("Required"),
});

export default function addCakeForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <label htmlFor={fields.CAKE_NAME}>Cake Name</label>
        <Field name={fields.CAKE_NAME} type="text" />
        <ErrorMessage name={fields.CAKE_NAME} />
        <label htmlFor={fields.COMMENT}>Comment</label>
        <Field name={fields.COMMENT} type="text" />
        <ErrorMessage name={fields.COMMENT} />
        <label htmlFor={fields.YUMFACTOR}>Yum Factor</label>
        <Field name={fields.YUMFACTOR} type={fields.YUMFACTOR} />
        <ErrorMessage name={fields.YUMFACTOR} />
        <label htmlFor={fields.IMAGE_URL}>Image URL</label>
        <Field name={fields.IMAGE_URL} type="text" />
        <ErrorMessage name={fields.IMAGE_URL} />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
