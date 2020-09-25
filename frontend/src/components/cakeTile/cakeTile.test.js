import React from "react";
import { render } from "@testing-library/react";
import CakeTile from "./cakeTile";
import { BrowserRouter } from "react-router-dom";

const testCake = {
  id: 1,
  name: "__TEST_CAKE__",
  comment: "__TEST_COMMENT__",
  imageUrl: "__TEST_URL__",
  yumFactor: 5,
};

test("renders CakeTile screen", () => {
  const { getByText } = render(
    <BrowserRouter>
      <CakeTile cake={testCake} fullDescription={false} />
    </BrowserRouter>
  );
  const linkElement = getByText(/More/i);
  expect(linkElement).toMatchSnapshot();
});
