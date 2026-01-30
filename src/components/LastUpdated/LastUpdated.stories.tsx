import type { Meta, StoryObj } from "@storybook/react-vite";

import { LastUpdated } from "./LastUpdated";

const meta = {
  component: LastUpdated,
} satisfies Meta<typeof LastUpdated>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    date: "2023-11-02T14:45:12Z",
    label: "Last Updated",
  },
};
