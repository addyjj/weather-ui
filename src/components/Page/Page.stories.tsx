import type { Meta, StoryObj } from "@storybook/react-vite";

import { Page } from "./Page";

const meta = {
  component: Page,
} satisfies Meta<typeof Page>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic = {
  args: {
    title: "Page Title",
    subtitle: "This is a subtitle for the page.",
  },
} satisfies Story;
