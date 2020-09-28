import React from "react";
import { render } from "@testing-library/react";
import NewCake from "./newCake";

test("renders about screen", () => {
  const { getByText } = render(<NewCake />);
  const newCakeElement = getByText(/New Cake Page/i);
  expect(newCakeElement).toBeInTheDocument();
});
