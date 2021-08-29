import { render, screen } from "@testing-library/react";
import React from "react";
import AddProperty from "../components/AddProperty";

test("renders learn react link", () => {
  render(<AddProperty />);
  const linkElement = screen.getByText("title:");
  expect(linkElement).toBeInTheDocument();
});
