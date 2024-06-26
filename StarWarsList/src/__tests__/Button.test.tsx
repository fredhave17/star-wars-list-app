// src/components/__tests__/Button.test.tsx

import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Button } from "../components/Button/Button";
describe("Button Component", () => {
  test("renders correctly with text", () => {
    const { getByText } = render(<Button text='Press Me' onPress={() => {}} />);
    const buttonText = getByText("Press Me");
    expect(buttonText).toBeDefined();
  });

  test("calls onPress prop when pressed", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button text='Press Me' onPress={onPressMock} />
    );
    const buttonElement = getByText("Press Me");
    fireEvent.press(buttonElement);
    expect(onPressMock).toHaveBeenCalled();
  });

  //   test("applies custom styles", () => {
  //     const { getByText } = render(
  //       <Button
  //         text='Press Me'
  //         onPress={() => {}}
  //         style={{ backgroundColor: "red" }} // Incluindo estilo customizado
  //       />
  //     );
  //     const buttonElement = getByText("Press Me");
  //     expect(buttonElement.props.style.backgroundColor).toEqual("red");
  //   });
});
