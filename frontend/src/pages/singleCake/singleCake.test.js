import React from "react";
import { render, waitForElement } from "@testing-library/react";
import SingleCake from "./singleCake";

jest.mock("../../utils", () => ({
  getData: () => ({
    id: 1,
    name: "__TEST_CAKE__",
    comment: "__TEST_COMMENT__",
    imageUrl: "__TEST_URL__",
    yumFactor: 5,
  }),
}));
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: 1,
  }),
  useRouteMatch: () => ({ url: "/cakes/1" }),
}));

test("renders single cake screen", async () => {
  const { getByText, asFragment } = render(<SingleCake />);
  const nameElement = await waitForElement(() => getByText(/__TEST_CAKE__/i));
  expect(nameElement).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
