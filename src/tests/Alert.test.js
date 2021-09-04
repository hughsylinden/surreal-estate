import { render, screen } from "@testing-library/react";
import React from "react";
import Alert from "../components/Alert";

test("renders alert component", () => {
  const mockMessage = {
    message: "mockmessage",
    success: true,
  };
  render(<Alert success={mockMessage.success} message={mockMessage.message} />);

  const messageElement = screen.getByText("mockmessage");
  expect(messageElement).toBeInTheDocument();
  expect(messageElement).toHaveClass("success-message");
});
