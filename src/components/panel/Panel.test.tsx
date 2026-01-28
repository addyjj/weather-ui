import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Panel } from "./Panel";

describe("Panel Component", () => {
  it("should render children", () => {
    render(
      <Panel>
        <div>Panel Content</div>
      </Panel>,
    );
    expect(screen.getByText("Panel Content")).toBeInTheDocument();
  });

  it("should render with title", () => {
    render(
      <Panel title="Test Title">
        <div>Panel Content</div>
      </Panel>,
    );
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("should not render title when not provided", () => {
    const { container } = render(
      <Panel>
        <div>Panel Content</div>
      </Panel>,
    );
    const titleDiv = container.querySelector(".text-slate-500");
    expect(titleDiv).not.toBeInTheDocument();
  });

  it("should apply correct CSS classes", () => {
    const { container } = render(
      <Panel title="Test">
        <div>Content</div>
      </Panel>,
    );
    const panelDiv = container.firstChild as HTMLElement;
    expect(panelDiv).toHaveClass(
      "col-span-2",
      "row-span-1",
      "bg-white",
      "dark:bg-slate-900",
      "border",
      "rounded-2xl",
      "p-6",
    );
  });

  it("should render with only children and no title", () => {
    render(<Panel>Solo Content</Panel>);
    expect(screen.getByText("Solo Content")).toBeInTheDocument();
  });
});
