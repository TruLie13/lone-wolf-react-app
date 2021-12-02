import { render, screen } from "@testing-library/react";
import App from ".";

test("renders App test", () => {
  render(<App />);
  const textElement = screen.getByText(/App/i);
  expect(textElement).toBeInTheDocument();
});
