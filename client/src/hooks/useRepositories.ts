import { useQuery } from "@tanstack/react-query";
import { getRepositories } from "../api/github.api";

export const useRepositories = () => {
  return useQuery({
    queryKey: ["repositories"],
    queryFn: getRepositories,
  });
};