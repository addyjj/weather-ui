import type { Device } from "../types/device";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchDevices = async (): Promise<Device[]> => {
  const response = await fetch(`${API_BASE_URL}/devices`);
  if (!response.ok) {
    throw new Error("Failed to fetch devices");
  }
  return response.json();
};
