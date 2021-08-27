import React from "react";
import AddTodo from "./AddTodo";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { store } from "../../redux";

const setup = () => {
  const utils = render(
    <Provider store={store}>
      <AddTodo />
    </Provider>
  );
  const input = utils.getByTestId("add-task-input") as HTMLInputElement;
  const button = utils.getByTestId("add-task-btn") as HTMLButtonElement;
  return {
    input,
    button,
    ...utils,
  };
};

test("it should check if input field get the value passed", () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: "feed cat" } });
  expect(input.value).toBe("feed cat");
});

test("adding task should clear input field", () => {
  const { input, button } = setup();
  fireEvent.change(input, { target: { value: "feed cat" } });
  fireEvent.click(button);
  expect(input.value).toBe("");
});
