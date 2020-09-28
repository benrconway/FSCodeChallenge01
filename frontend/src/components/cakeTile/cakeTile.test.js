import React from "react";
import { render, waitForElement } from "@testing-library/react";
import CakeTile from "./cakeTile";
import { BrowserRouter } from "react-router-dom";

const testCake = {
  id: 1,
  name: "__TEST_CAKE__",
  comment: "__TEST_COMMENT__",
  imageUrl: "__TEST_URL__",
  yumFactor: 5,
};

test("renders CakeTile with partial details", async () => {
  const { getByText, asFragment } = render(
    <BrowserRouter>
      <CakeTile cake={testCake} fullDescription={false} />
    </BrowserRouter>
  );
  await waitForElement(() => getByText(/More/i));
  expect(asFragment()).toMatchSnapshot();
});

test("renders CakeTile with complete details", async () => {
  const { getByText, asFragment } = render(
    <BrowserRouter>
      <CakeTile cake={testCake} fullDescription={true} />
    </BrowserRouter>
  );
  await waitForElement(() => getByText(/__TEST_CAKE__/i));
  expect(asFragment()).toMatchSnapshot();
});
