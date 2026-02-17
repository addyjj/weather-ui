import { useQuery } from "@tanstack/react-query";
import type { Device } from "../types/device";
import { fetchDevices } from "../services/deviceApi";

export const useDevices = () => {
  return useQuery<Device[], Error>({
    queryKey: ["devices"],
    queryFn: fetchDevices,
  });
};
