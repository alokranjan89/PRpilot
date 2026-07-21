import { Request, Response } from "express";
import prisma from "../prisma/prisma";
import { getRepositories } from "../services/github.service";

export const getMyRepositories = async (
  req: Request,
  res: Response
) => {
  // 1. Get current user from database
  const user = await prisma.user.findUnique({
    where: {
      id: req.user!.userId,
    },
  });

  // 2. User not found
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  // 3. Check GitHub access token
  if (!user.accessToken) {
    return res.status(401).json({
      success: false,
      message: "GitHub access token not found",
    });
  }

  // 4. Fetch repositories from GitHub
  const repositories = await getRepositories(user.accessToken);

  // 5. Return response
  return res.status(200).json({
    success: true,
    count: repositories.length,
    repositories,
  });
};

export const getRepositoryReadme = async (
  req: Request,
  res: Response
) => {

  const { owner, repo } = req.params;

  const user = await prisma.user.findUnique({
    where: {
      id: req.user!.userId,
    },
  });

  if (!user?.accessToken) {
    return res.status(401).json({
      success: false,
      message: "GitHub access token missing",
    });
  }

  const readme = await getReadme(
    owner,
    repo,
    user.accessToken
  );

  return res.json({
    success: true,
    readme,
  });

};