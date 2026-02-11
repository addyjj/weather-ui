import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { DateTime } from "luxon";
import { LastUpdated } from "./LastUpdated";

describe("LastUpdated Component", () => {
  it("renders the label", () => {
    render(<LastUpdated date="2023-11-02T14:45:12Z" />);
    expect(screen.getByText(/Last Updated/i)).toBeInTheDocument();
  });

  it("formats an ISO string with DATETIME_SHORT", () => {
    const isoString = "2023-11-02T14:45:12Z";
    const expectedFormat = DateTime.fromISO(isoString).toLocaleString(
      DateTime.DATETIME_SHORT,
    );
    const { container } = render(<LastUpdated date={isoString} />);
    const dateDiv = container.querySelector(".flex.items-center.gap-1");
    expect(dateDiv?.textContent).toBe(expectedFormat);
  });

  it("formats a Date object with DATETIME_SHORT", () => {
    const testDate = new Date("2024-01-15T10:30:45Z");
    const expectedFormat = DateTime.fromJSDate(testDate).toLocaleString(
      DateTime.DATETIME_SHORT,
    );
    const { container } = render(<LastUpdated date={testDate} />);
    const dateDiv = container.querySelector(".flex.items-center.gap-1");
    expect(dateDiv?.textContent).toBe(expectedFormat);
  });

  it("renders Invalid DateTime for invalid date strings", () => {
    const { container } = render(<LastUpdated date="invalid-date" />);
    const dateDiv = container.querySelector(".flex.items-center.gap-1");
    expect(dateDiv?.textContent).toBe("Invalid DateTime");
  });

  it("applies the wrapper layout classes", () => {
    const { container } = render(<LastUpdated date="2023-11-02T14:45:12Z" />);
    const wrapper = container.querySelector(".flex.flex-col.items-end");
    expect(wrapper).toHaveClass("text-[10px]");
  });

  it("applies the label styling classes", () => {
    render(<LastUpdated date="2023-11-02T14:45:12Z" />);
    const label = screen.getByText(/Last Updated/i);
    expect(label).toHaveClass(
      "text-slate-400",
      "font-bold",
      "uppercase",
      "tracking-wider",
    );
  });

  it("applies the date styling classes", () => {
    const { container } = render(<LastUpdated date="2023-11-02T14:45:12Z" />);
    const dateDiv = container.querySelector(".flex.items-center.gap-1");
    expect(dateDiv).toHaveClass("font-bold", "text-green-500");
  });
});
