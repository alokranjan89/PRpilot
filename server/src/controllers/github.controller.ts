import { Request, Response } from "express";
import axios from "axios";

// Get logged-in user's repositories
export const getMyRepositories = async (
  req: Request,
  res: Response
) => {
  try {
    const { accessToken } = req.user as any;

    const response = await axios.get(
      "https://api.github.com/user/repos",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    res.json({
      success: true,
      repositories: response.data,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch repositories",
    });
  }
};

// Get README of one repository
export const getRepositoryReadme = async (
  req: Request,
  res: Response
) => {
  try {
    const { owner, repo } = req.params;
    const { accessToken } = req.user as any;

    const response = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/readme`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: "application/vnd.github.raw",
        },
      }
    );

    res.json({
      success: true,
      readme: response.data,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch README",
    });
  }
};