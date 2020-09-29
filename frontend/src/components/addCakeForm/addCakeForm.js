import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { postData } from "../../utils";

const fields = {
  NAME: "name",
  COMMENT: "comment",
  YUMFACTOR: "yumFactor",
  IMAGE_URL: "imageUrl",
};

const initialValues = {
  name: "",
  comment: "",
  yumFactor: "",
  imageUrl: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  comment: Yup.string().required("Required"),
  yumFactor: Yup.string().required("Required"),
  imageUrl: Yup.string().required("Required"),
});

export default function AddCakeForm({ newCakeId, updateData, closeModal }) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        values.id = newCakeId;
        const response = await postData("/cakes", values);
        setSubmitting(false);
        updateData(response);
        closeModal();
      }}
    >
      <Form>
        <label htmlFor={fields.NAME}>Cake Name</label>
        <Field name={fields.NAME} type="text" />
        <ErrorMessage name={fields.NAME} />
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
