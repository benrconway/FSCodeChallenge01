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
  name: Yup.string().required("Name is required"),
  comment: Yup.string().required("Comment is Required"),
  yumFactor: Yup.number()
    .typeError("Yum factor must be a number")
    .min(1, "Yum factor must be between 1 and 5")
    .max(5, "Yum factor must be between 1 and 5")
    .required("Yum factor is required"),
  imageUrl: Yup.string(),
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
        <div className="error-message">
          <ErrorMessage name={fields.NAME} />
        </div>
        <label htmlFor={fields.COMMENT}>Comment</label>
        <Field name={fields.COMMENT} type="text" />
        <div className="error-message">
          <ErrorMessage name={fields.COMMENT} />
        </div>
        <label htmlFor={fields.YUMFACTOR}>Yum Factor</label>
        <Field name={fields.YUMFACTOR} type="text" />
        <div className="error-message">
          <ErrorMessage name={fields.YUMFACTOR} />
        </div>
        <label htmlFor={fields.IMAGE_URL}>Image URL</label>
        <Field name={fields.IMAGE_URL} type="text" />
        <div className="error-message">
          <ErrorMessage name={fields.IMAGE_URL} />
        </div>
        <button className="form-button" type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
}
