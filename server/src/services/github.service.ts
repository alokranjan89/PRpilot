import axios from "axios";

export interface RepositoryDTO {
  id: number;
  name: string;
  fullName: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  updatedAt: string;
  htmlUrl: string;
  private: boolean;
}

export const getRepositories = async (
  accessToken: string
): Promise<RepositoryDTO[]> => {
  const response = await axios.get(
    "https://api.github.com/user/repos",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/vnd.github+json",
      },
    }
  );

  return response.data.map((repo: any) => ({
    id: repo.id,
    name: repo.name,
    fullName: repo.full_name,
    description: repo.description,
    language: repo.language,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    updatedAt: repo.updated_at,
    htmlUrl: repo.html_url,
    private: repo.private,
  }));
};

export const getReadme = async (
  owner: string,
  repo: string,
  accessToken: string
) => {
  const response = await axios.get(
    `https://api.github.com/repos/${owner}/${repo}/readme`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/vnd.github+json",
      },
    }
  );

  const readme = Buffer.from(
    response.data.content,
    "base64"
  ).toString("utf8");

  return readme;
};