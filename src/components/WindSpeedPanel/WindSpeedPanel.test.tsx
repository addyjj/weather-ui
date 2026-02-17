import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { WindSpeedPanel } from "./WindSpeedPanel";

describe("WindSpeedPanel", () => {
  it("renders the panel title", () => {
    render(<WindSpeedPanel speed={12.4} directionDegrees={345} gust={18.6} />);
    expect(screen.getByText("Wind Speed & Gusts")).toBeInTheDocument();
  });

  it("renders speed and unit", () => {
    render(<WindSpeedPanel speed={12.4} directionDegrees={345} gust={18.6} />);
    expect(screen.getByText("12.4")).toBeInTheDocument();
    expect(screen.getByText("mph")).toBeInTheDocument();
  });

  it("renders gust text with direction label", () => {
    render(<WindSpeedPanel speed={12.4} directionDegrees={345} gust={18.6} />);
    expect(
      screen.getByText(
        (content) =>
          content.includes("NNW") &&
          content.includes("Max Gust") &&
          content.includes("18.6"),
      ),
    ).toBeInTheDocument();
  });

  it("rotates the direction icon", () => {
    const { container } = render(
      <WindSpeedPanel speed={12.4} directionDegrees={90} gust={18.6} />,
    );
    const icon = container.querySelector(
      ".material-symbols-outlined.text-primary",
    );
    expect(icon).toHaveStyle("transform: rotate(90deg)");
  });

  it("applies custom className to the panel", () => {
    const { container } = render(
      <WindSpeedPanel
        className="test-panel"
        speed={12.4}
        directionDegrees={345}
        gust={18.6}
      />,
    );
    const panel = container.firstChild as HTMLElement;
    expect(panel).toHaveClass("test-panel");
  });
});
