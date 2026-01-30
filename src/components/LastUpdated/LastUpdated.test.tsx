import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { DateTime } from "luxon";
import { LastUpdated } from "./LastUpdated";

describe("LastUpdated Component", () => {
  it("should render the component with default label", () => {
    const { container } = render(<LastUpdated date="2023-11-02T14:45:12Z" />);
    expect(screen.getByText(/Last Updated/i)).toBeInTheDocument();
    expect(
      container.querySelector(".material-symbols-outlined"),
    ).toBeInTheDocument();
  });

  it("should display formatted date from ISO string", () => {
    const { container } = render(<LastUpdated date="2023-11-02T14:45:12Z" />);
    const dateDiv = container.querySelector(".flex.items-center.gap-2");
    const dateSpan = dateDiv?.querySelector("span:last-child");
    expect(dateSpan?.textContent).toMatch(/Nov 2, 2023/);
  });

  it("should display formatted date from Date object", () => {
    const testDate = new Date("2023-11-02T14:45:12Z");
    const { container } = render(<LastUpdated date={testDate} />);
    const dateDiv = container.querySelector(".flex.items-center.gap-2");
    const dateSpan = dateDiv?.querySelector("span:last-child");
    expect(dateSpan?.textContent).toMatch(/Nov 2, 2023/);
  });

  it("should handle invalid date string by rendering Invalid DateTime", () => {
    const { container } = render(<LastUpdated date="invalid-date" />);
    const dateDiv = container.querySelector(".flex.items-center.gap-2");
    const dateSpan = dateDiv?.querySelector("span:last-child");
    expect(dateSpan?.textContent).toBe("Invalid DateTime");
  });

  it("should render the schedule icon", () => {
    const { container } = render(<LastUpdated date="2023-11-02T14:45:12Z" />);
    const icon = container.querySelector(".material-symbols-outlined");
    expect(icon?.textContent).toBe("schedule");
  });

  it("should use DATETIME_MED format for displaying dates", () => {
    const testDate = new Date("2024-01-15T10:30:45Z");
    const expectedFormat = DateTime.fromJSDate(testDate).toLocaleString(
      DateTime.DATETIME_MED,
    );
    const { container } = render(<LastUpdated date={testDate} />);
    const dateDiv = container.querySelector(".flex.items-center.gap-2");
    const dateSpan = dateDiv?.querySelector("span:last-child");
    expect(dateSpan?.textContent).toBe(expectedFormat);
  });

  it("should render with correct styling classes for label", () => {
    render(<LastUpdated date="2023-11-02T14:45:12Z" />);
    const label = screen.getByText(/Last Updated/i);
    expect(label).toHaveClass(
      "text-[10px]",
      "text-slate-600",
      "dark:text-slate-400",
      "font-bold",
      "uppercase",
      "tracking-widest",
    );
  });

  it("should render icon with correct color classes", () => {
    const { container } = render(<LastUpdated date="2023-11-02T14:45:12Z" />);
    const icon = container.querySelector(".material-symbols-outlined");
    expect(icon).toHaveClass("text-sm", "text-green-500");
  });

  it("should convert UTC timestamp to local time", () => {
    // Luxon DateTime handles timezone conversion automatically
    const isoString = "2023-11-02T14:45:12Z";
    const localDateTime = DateTime.fromISO(isoString).toLocaleString(
      DateTime.DATETIME_MED,
    );
    const { container } = render(<LastUpdated date={isoString} />);
    const dateDiv = container.querySelector(".flex.items-center.gap-2");
    const dateSpan = dateDiv?.querySelector("span:last-child");
    expect(dateSpan?.textContent).toBe(localDateTime);
  });

  it("should handle numeric input by converting to string", () => {
    const { container } = render(
      <LastUpdated date={12345 as unknown as string} />,
    );
    const dateDiv = container.querySelector(".flex.items-center.gap-2");
    const dateSpan = dateDiv?.querySelector("span:last-child");
    expect(dateSpan?.textContent).toBe("12345");
  });

  it("should display flex layout with correct direction", () => {
    const { container } = render(<LastUpdated date="2023-11-02T14:45:12Z" />);
    const wrapper = container.querySelector(".flex.flex-col.items-end");
    expect(wrapper).toBeInTheDocument();
  });

  it("should display content in correct order", () => {
    const { container } = render(<LastUpdated date="2023-11-02T14:45:12Z" />);
    const wrapper = container.querySelector(".flex.flex-col.items-end");
    const children = wrapper?.children;
    expect(children?.[0]?.textContent).toMatch(/Last Updated/i);
    expect(
      children?.[1]?.querySelector(".material-symbols-outlined"),
    ).toBeInTheDocument();
  });

  it("should render with dark mode classes on date container", () => {
    const { container } = render(<LastUpdated date="2023-11-02T14:45:12Z" />);
    const dateContainer = container.querySelector(
      ".text-slate-900.dark\\:text-white",
    );
    expect(dateContainer).toBeInTheDocument();
  });
});
