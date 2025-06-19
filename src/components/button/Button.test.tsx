import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
    it("renders children correctly", () => {
        render(<Button>Click Me</Button>);
        expect(screen.getByText("Click Me")).toBeInTheDocument();
    });

    it("applies the primary variant style by default", () => {
        render(<Button>Primary</Button>);
        const btn = screen.getByRole("button");
        expect(btn).toHaveClass("bg-sky-500");
    });

    it("applies the secondary variant style when passed", () => {
        render(<Button variant="secondary">Secondary</Button>);
        const btn = screen.getByRole("button");
        expect(btn).toHaveClass("bg-gray-300");
    });

    it("fires click event when clicked", () => {
        const onClick = jest.fn();
        render(<Button onClick={onClick}>Click Me</Button>);
        const btn = screen.getByRole("button");
        fireEvent.click(btn);
        expect(onClick).toHaveBeenCalledTimes(1);
    });
})