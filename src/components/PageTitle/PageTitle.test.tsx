import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { PageTitle } from "./PageTitle";

describe("PageTitle Component", () => {
  it("renders title and subtitle", () => {
    render(
      <PageTitle
        title="Current Conditions"
        subtitle="San Francisco Personal Weather Observation Station"
      />,
    );

    expect(
      screen.getByRole("heading", { name: /current conditions/i, level: 2 }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/San Francisco Personal Weather Observation Station/i),
    ).toBeInTheDocument();
  });

  it("applies classes to title and subtitle", () => {
    render(<PageTitle title="X" subtitle="Y" />);
    const heading = screen.getByRole("heading", { level: 2 }) as HTMLElement;
    expect(heading).toHaveClass("text-3xl", "font-bold", "tracking-tight");
    const p = screen.getByText(/Y/);
    expect(p).toHaveClass("text-slate-600", "dark:text-slate-400", "text-sm");
  });

  it("applies className to container", () => {
    const { container } = render(<PageTitle className="test-class" />);
    const main = container.firstChild as HTMLElement;
    expect(main).toHaveClass("test-class");
  });
});
