import { render, screen } from "@testing-library/react";
import React from "react";
import Property from "../components/Property";

describe("Property", () => {
  const dummyProperty = {
    title: "dummyTitle",
    bedrooms: 1,
    bathrooms: 2,
    price: 3,
    city: "dummyCity",
    type: "dummyType",
    email: "dummyEmail",
  };
  test("renders Property component", () => {
    const { asFragment } = render(<Property property={dummyProperty} />);
    expect(asFragment).toMatchSnapshot();
  });

  test("renders Property component with property props as elements", () => {
    render(<Property property={dummyProperty} />);

    expect(screen.getByText("dummyTitle")).toHaveClass("property-item title");
    expect(screen.getByText("1")).toHaveClass("property-item bedrooms");
    expect(screen.getByText("2")).toHaveClass("property-item bathrooms");
    expect(screen.getByText("3")).toHaveClass("property-item price");
    expect(screen.getByText("dummyCity")).toHaveClass("property-item city");
    expect(screen.getByText("dummyType")).toHaveClass("property-item type");
    expect(screen.getByText("dummyEmail")).toHaveClass("property-item email");
  });
  test("renders Property component with img elements for each propert", () => {
    render(<Property property={dummyProperty} />);

    expect(screen.getByAltText("bedrooms")).toHaveClass("bedrooms__img");
    expect(screen.getByAltText("bathrooms")).toHaveClass("bathrooms__img");
    expect(screen.getByAltText("price")).toHaveClass("price__img");
    expect(screen.getByAltText("city")).toHaveClass("city__img");
    expect(screen.getByAltText("type")).toHaveClass("type__img");
    expect(screen.getByAltText("email")).toHaveClass("email__img");
  });
});
