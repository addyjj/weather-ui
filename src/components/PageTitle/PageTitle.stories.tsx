import type { Meta, StoryObj } from "@storybook/react-vite";

import { PageTitle } from "./PageTitle";

const meta = {
  component: PageTitle,
} satisfies Meta<typeof PageTitle>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic = {
  args: {
    title: "Current Conditions",
    subtitle: "San Francisco Personal Weather Observation Station",
  },
} satisfies Story;
