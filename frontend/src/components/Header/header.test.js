import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import Header from "./";

test("renders header title", () => {
  const { getByText } = render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const linkElement = getByText(/Cakes Progressive Web App/i);
  expect(linkElement).toBeInTheDocument();
});
