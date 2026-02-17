import type { Meta, StoryObj } from "@storybook/react-vite";

import { Home } from "./Home";

const meta = {
  component: Home,
} satisfies Meta<typeof Home>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic = {
  args: {
    isLoading: false,
    error: null,
  },
} satisfies Story;

export const Loading = {
  args: {
    isLoading: true,
    error: null,
  },
} satisfies Story;

export const WithError = {
  args: {
    isLoading: false,
    error: new Error("Failed to load devices"),
  },
} satisfies Story;
