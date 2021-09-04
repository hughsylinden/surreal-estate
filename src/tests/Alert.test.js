import { render, screen } from "@testing-library/react";
import React from "react";
import Alert from "../components/Alert";

describe("Alert", () => {
  const mockMessage = {
    message: "mockmessage",
    success: true,
  };

  test("renders alert component", () => {
    const { asFragment } = render(
      <Alert success={mockMessage.success} message={mockMessage.message} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("alert message with className attributed rendered", () => {
    render(
      <Alert success={mockMessage.success} message={mockMessage.message} />
    );
    const messageElement = screen.getByText("mockmessage");
    expect(messageElement).toBeInTheDocument();
    expect(messageElement).toHaveClass("success-message");
  });
});
