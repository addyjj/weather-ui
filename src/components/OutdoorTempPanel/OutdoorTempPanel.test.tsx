import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { OutdoorTempPanel } from "./OutdoorTempPanel";

describe("OutdoorTempPanel", () => {
  it("renders the panel title", () => {
    render(<OutdoorTempPanel temperature={72} feelsLike={70} />);
    expect(screen.getByText("Temperature")).toBeInTheDocument();
  });

  it("renders temperature and unit", () => {
    render(<OutdoorTempPanel temperature={72} feelsLike={70} />);
    expect(screen.getByText("72°")).toBeInTheDocument();
    expect(screen.getByText("F")).toBeInTheDocument();
  });

  it("renders feels like text", () => {
    render(<OutdoorTempPanel temperature={72} feelsLike={70} />);
    expect(screen.getByText("Feels like 70°")).toBeInTheDocument();
  });

  it("applies custom className on the panel container", () => {
    const { container } = render(
      <OutdoorTempPanel
        className="test-panel"
        temperature={72}
        feelsLike={70}
      />,
    );
    const panel = container.firstChild as HTMLElement;
    expect(panel).toHaveClass("test-panel");
  });
});
