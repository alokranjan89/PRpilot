import api from "./axios";

export const getRepositories = async () => {
  const response = await api.get("/github/repos");

  return response.data;
};