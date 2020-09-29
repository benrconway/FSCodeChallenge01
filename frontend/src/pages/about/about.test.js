import React from "react";
import { render } from "@testing-library/react";
import About from "./about";

test("renders about screen", () => {
  const { getByText } = render(<About />);
  const titleElement = getByText(/About/i);
  expect(titleElement).toBeInTheDocument();
});
