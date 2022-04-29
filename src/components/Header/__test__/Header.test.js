import Header from "../Header";
import { render, screen } from "@testing-library/react";

describe("Header Component", () => {
  test("Should render same text passed into title prop", () => {
    render(<Header title="Signup Form" />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
  });
});
