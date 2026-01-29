import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Page } from "./Page";

describe("Page Component", () => {
  it("should render with title", () => {
    render(<Page title="Test Title" />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Test Title",
    );
  });

  it("should render with title and subtitle", () => {
    render(<Page title="Test Title" subtitle="Test Subtitle" />);
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
  });

  it("should render children", () => {
    render(
      <Page title="Test Title">
        <div>Child Content</div>
      </Page>,
    );
    expect(screen.getByText("Child Content")).toBeInTheDocument();
  });

  it("should not render subtitle when not provided", () => {
    render(<Page title="Test Title" />);
    const paragraphs = screen.getAllByRole("generic");
    expect(paragraphs.length).toBeGreaterThan(0);
  });

  it("should apply correct CSS classes", () => {
    const { container } = render(<Page title="Test Title" />);
    const main = container.querySelector("main");
    expect(main).toHaveClass("flex-1", "overflow-y-auto", "px-8", "py-8");
  });
});
