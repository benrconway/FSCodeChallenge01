import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders appropriate home screen in app component", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Home screen/i);
  expect(linkElement).toBeInTheDocument();
});
