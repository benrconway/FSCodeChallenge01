import React from "react";
import { render } from "@testing-library/react";
import SingleCake from "./singleCake";

test("renders single cake screen", () => {
  const { getByText } = render(<SingleCake />);
  const linkElement = getByText(/SingleCake screen/i);
  expect(linkElement).toBeInTheDocument();
});
