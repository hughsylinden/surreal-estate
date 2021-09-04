import { render, screen } from "@testing-library/react";
import React from "react";
import NavBar from "../components/NavBar";

test("it renders a NavBar component", () => {
  render(<NavBar />);
  const properties = screen.getByText("properties");
  expect(properties).toBeInTheDocument();
});
