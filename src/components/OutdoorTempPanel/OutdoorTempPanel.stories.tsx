import type { Meta, StoryObj } from "@storybook/react-vite";
import { OutdoorTempPanel } from "./OutdoorTempPanel";

const meta = {
  component: OutdoorTempPanel,
} satisfies Meta<typeof OutdoorTempPanel>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic = {
  args: {
    temperature: 72.5,
    feelsLike: 74.2,
  },
} satisfies Story;
