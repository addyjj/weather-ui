import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { AppHeader } from "./AppHeader";

vi.mock("../LastUpdated", () => ({
  LastUpdated: ({ date }: { date: Date | string }) => (
    <div data-testid="last-updated">{String(Boolean(date))}</div>
  ),
}));

describe("AppHeader", () => {
  it("renders the app title and location", () => {
    render(<AppHeader />);
    expect(screen.getByText("Home Station")).toBeInTheDocument();
    expect(screen.getByText("San Francisco, CA")).toBeInTheDocument();
  });

  it("renders the weather icon", () => {
    const { container } = render(<AppHeader />);
    const icon = container.querySelector(".material-symbols-outlined");
    expect(icon).toBeInTheDocument();
    expect(icon?.textContent).toBe("wb_sunny");
  });

  it("renders the last updated widget", () => {
    render(<AppHeader />);
    expect(screen.getByTestId("last-updated")).toBeInTheDocument();
  });

  it("applies the header layout classes", () => {
    const { container } = render(<AppHeader />);
    const header = container.querySelector("header");
    expect(header).toHaveClass(
      "sticky",
      "top-0",
      "z-50",
      "glass",
      "px-4",
      "py-3",
      "flex",
      "items-center",
      "justify-between",
    );
  });
});
