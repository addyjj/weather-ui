import type { Meta, StoryObj } from "@storybook/react-vite";
import { WindSpeedPanel } from "./WindSpeedPanel";

const meta = {
  component: WindSpeedPanel,
} satisfies Meta<typeof WindSpeedPanel>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic = {
  args: {
    speed: 12.4,
    directionDegrees: 45,
    gust: 18.6,
  },
} satisfies Story;
