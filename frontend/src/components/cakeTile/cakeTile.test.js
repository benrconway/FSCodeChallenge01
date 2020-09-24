import React from "react";
import { render } from "@testing-library/react";
import CakeTile from "./cakeTile";

const name = "__TEST__";

test("renders CakeTile screen", () => {
  const { getByText } = render(<CakeTile cake={{ name }} />);
  const linkElement = getByText(/__TEST__/i);
  expect(linkElement).toBeInTheDocument();
});
