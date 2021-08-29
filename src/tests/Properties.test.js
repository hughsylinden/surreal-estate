import { render, screen } from "@testing-library/react";
import React from "react";
import Properties from "../components/Properties";

test("renders learn react link", () => {
  render(<Properties />);
  const linkElement = screen.getByText("title");
  expect(linkElement).toBeInTheDocument();
});
