import { render, screen } from "@testing-library/react";
// import renderer from "react-test-renderer";
import React from "react";
import AddProperty from "../components/AddProperty";

describe("AddProperty", () => {
  it("renders AddProperty Page", () => {
    const { asFragment } = render(<AddProperty />);
    expect(asFragment).toMatchSnapshot();
  });

  it("renders correct text output", () => {
    /*   const dummyProperty = {
    title: "dummyTitle",
    bedrooms: 1,
    bathrooms: 2,
    price: 3,
    city: "dummyCity",
    type: "dummyType",
    email: "dummyEmail",
  }; */

    render(<AddProperty />);
    expect(screen.getByText("title:")).toBeInTheDocument();
    expect(screen.getByText("bedrooms:")).toBeInTheDocument();
    expect(screen.getByText("bathrooms:")).toBeInTheDocument();
    expect(screen.getByText("price:")).toBeInTheDocument();
    expect(screen.getByText("email:")).toBeInTheDocument();
    expect(screen.getByText("city:")).toBeInTheDocument();
    expect(screen.getByText("type:")).toBeInTheDocument();
  });

  /*   it("pressing button with no input renders alert component", async () => {
    const handleAddProperty = jest.fn();
    render(<AddProperty />);
    const button = screen.getByText("Add");
    await fireEvent.click(button);
    expect(handleAddProperty).toBeCalledTimes(1);
  }); */
});
