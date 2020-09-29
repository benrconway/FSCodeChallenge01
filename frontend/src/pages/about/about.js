import React from "react";

export default function About() {
  return (
    <div>
      <h2>About</h2>
      <p>
        This application has been built to answer the following requirements:
      </p>
      <ol>
        <li>Create a page that shows a list of cakes</li>
        <li>Give the user the ability to add a cake of their own</li>
        <li>Allow the user to see more details of a cake they like</li>
      </ol>
      <p>
        This has been achieved, and now I would like to thank the following
        entities for their support:
      </p>
      <ul>
        <li>
          <div>
            The cake icon was sourced from{" "}
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>{" "}
            at{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
        </li>
        <li>
          <a href="https://reactjs.org/">React</a>
        </li>
        <li>
          <a href="https://www.npmjs.com/package/axios">Axios</a>
        </li>
        <li>
          <a href="https://formik.org/">Formik</a>
        </li>
        <li>
          <a href="https://github.com/jquense/yup">Yup</a>
        </li>
      </ul>
      <p>
        For where this project has been and where it could go in the future,
        please check out the README attached to the project{" "}
        <a href="https://github.com/benrconway/FSCodeChallenge01">
          github page.
        </a>
        <br />
        <br /> Thank you for visiting.
      </p>
    </div>
  );
}
