import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Chart from "./Chart";

let container: any = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders the chart with given props", () => {
  const arr = [[1591044400000, 0.01], [1591046800000, 0.02]];
  const currency = 'EUR';
  const days = '7d';

  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    render(<Chart arr={arr} currency={currency} days={days} />, container);
  });
  
  expect(container.querySelector('.chartjs-size-monitor')).toBeDefined();
});