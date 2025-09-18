import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "./Header";

const selectors = {
  getUserNameInput: () => screen.getByPlaceholderText(/username/i),
};
describe("Header", () => {
  it("should render default empty search bar", async () => {
    const mockCb = jest.fn();
    render(<Header onChangeUserName={mockCb} />);

    const userInput = selectors.getUserNameInput();

    expect(userInput).toBeInTheDocument();

    userEvent.type(userInput, "jose");

    await waitFor(() => {
      expect(userInput).toHaveValue("jose");
    });
  });
  it("should call callback on change", async () => {
    const mockCb = jest.fn();
    render(<Header onChangeUserName={mockCb} />);

    const userInput = selectors.getUserNameInput();

    userEvent.type(userInput, "jose"); // async typing

    await waitFor(() => {
      expect(userInput).toHaveValue("jose");
      expect(mockCb).toHaveBeenCalledWith("jose");
    });
  });
});
