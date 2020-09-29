import React from "react";
import { render } from "@testing-library/react";
import Home from "./home";

test("renders home screen", () => {
  const { getByText } = render(<Home cakes={[]} />);
  const titleElement = getByText(/Cake list/i);
  expect(titleElement).toBeInTheDocument();
});
