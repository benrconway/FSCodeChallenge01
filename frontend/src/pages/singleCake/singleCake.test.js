import React from "react";
import { render } from "@testing-library/react";
import SingleCake from "./";

test("renders learn react link", () => {
  const { getByText } = render(<SingleCake />);
  const linkElement = getByText(/SingleCake screen/i);
  expect(linkElement).toBeInTheDocument();
});
