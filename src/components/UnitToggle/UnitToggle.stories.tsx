import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import { UnitToggle } from "./UnitToggle";

const meta = {
  component: UnitToggle,
} satisfies Meta<typeof UnitToggle>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic = {
  args: {
    value: "metric",
    onChange: fn(),
  },
} satisfies Story;
