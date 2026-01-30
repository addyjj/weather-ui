import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { UnitToggle } from "./UnitToggle";

describe("UnitToggle Component", () => {
  it("should render both buttons", () => {
    const mockChange = vi.fn();
    render(<UnitToggle value="imperial" onChange={mockChange} />);
    expect(
      screen.getByRole("button", { name: /imperial/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /metric/i })).toBeInTheDocument();
  });

  it("should highlight imperial button when selected", () => {
    const mockChange = vi.fn();
    render(<UnitToggle value="imperial" onChange={mockChange} />);
    const imperialBtn = screen.getByRole("button", { name: /imperial/i });
    expect(imperialBtn).toHaveClass("bg-slate-100", "dark:bg-slate-700");
  });

  it("should highlight metric button when selected", () => {
    const mockChange = vi.fn();
    render(<UnitToggle value="metric" onChange={mockChange} />);
    const metricBtn = screen.getByRole("button", { name: /metric/i });
    expect(metricBtn).toHaveClass("bg-slate-100", "dark:bg-slate-700");
  });

  it("should call onChange when imperial is clicked", async () => {
    const mockChange = vi.fn();
    render(<UnitToggle value="metric" onChange={mockChange} />);
    const imperialBtn = screen.getByRole("button", { name: /imperial/i });
    await userEvent.click(imperialBtn);
    expect(mockChange).toHaveBeenCalledWith("imperial");
  });

  it("should call onChange when metric is clicked", async () => {
    const mockChange = vi.fn();
    render(<UnitToggle value="imperial" onChange={mockChange} />);
    const metricBtn = screen.getByRole("button", { name: /metric/i });
    await userEvent.click(metricBtn);
    expect(mockChange).toHaveBeenCalledWith("metric");
  });

  it("should apply correct container classes", () => {
    const mockChange = vi.fn();
    const { container } = render(
      <UnitToggle value="imperial" onChange={mockChange} />,
    );
    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv).toHaveClass(
      "flex",
      "gap-1",
      "bg-white",
      "dark:bg-slate-800",
      "rounded-xl",
      "border",
      "shadow-sm",
    );
  });
});
