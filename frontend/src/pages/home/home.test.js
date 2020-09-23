import React from "react";
import { render } from "@testing-library/react";
import Home from "./";

test("renders home screen", () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/Home screen/i);
  expect(linkElement).toBeInTheDocument();
});
