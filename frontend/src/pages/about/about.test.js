import React from "react";
import { render } from "@testing-library/react";
import About from "./";

test("renders learn react link", () => {
  const { getByText } = render(<About />);
  const linkElement = getByText(/About screen/i);
  expect(linkElement).toBeInTheDocument();
});
