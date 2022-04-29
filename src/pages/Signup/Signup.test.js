import Signup from "./Signup";
import { render, screen } from "@testing-library/react";

describe("Signup form", () => {
  test("renders Signup", () => {
    render(<Signup />);
    const textElement = screen.getByText(/Signup/i);
    expect(textElement).toBeInTheDocument();
  });
});
