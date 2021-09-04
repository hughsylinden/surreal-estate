/* eslint-disable no-unused-vars */
import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../components/NavBar";

describe("NavBar", () => {
  test("it renders a NavBar component", () => {
    const { asFragment } = render(
      <Router>
        <NavBar />
      </Router>
    );
    expect(asFragment).toMatchSnapshot();
  });

  test("it renders properties and add properties elements", () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );
    const properties = screen.getByText("properties");
    const addProperty = screen.getByText("add property");
    expect(properties).toBeInTheDocument();
    expect(addProperty).toBeInTheDocument();
  });
});
