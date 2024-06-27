import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { TopBar, TopBarProps } from "../components/TopBar/TopBar";

describe("TopBar Component", () => {
  const onPressLeftButton = jest.fn();

  const props: TopBarProps = {
    iconLeft: true,
    iconRight: true,
    onPressLeftButton,
  };

  it("renders with left and right icons", () => {
    const { getByTestId, getByLabelText } = render(<TopBar {...props} />);

    const leftIcon = getByLabelText("left-icon");
    expect(leftIcon).toBeTruthy();

    const rightIcon = getByTestId("right-icon");
    expect(rightIcon).toBeTruthy();
  });

  it("calls onPressLeftButton when left icon is pressed", () => {
    const { getByLabelText } = render(<TopBar {...props} />);

    const leftIcon = getByLabelText("left-icon");
    fireEvent.press(leftIcon);

    expect(onPressLeftButton).toHaveBeenCalled();
  });

  it("renders without left icon when prop iconLeft is false", () => {
    const { queryByLabelText } = render(<TopBar {...props} iconLeft={false} />);

    const leftIcon = queryByLabelText("left-icon");
    expect(leftIcon).toBeNull();
  });

  it("renders without right icon when prop iconRight is false", () => {
    const { queryByTestId } = render(<TopBar {...props} iconRight={false} />);

    const rightIcon = queryByTestId("right-icon");
    expect(rightIcon).toBeNull();
  });
});
