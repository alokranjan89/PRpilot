import { Request, Response } from "express";
import prisma from "../prisma/prisma";
import { getReadme } from "../services/github.service";
import { analyzeRepository } from "../services/ai.service";

export const analyzeRepo = async (
  req: Request,
  res: Response
) => {
  try {
    const { owner, repo } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        id: req.user!.userId,
      },
    });

    if (!user?.accessToken) {
      return res.status(401).json({
        success: false,
        message: "GitHub access token not found",
      });
    }

    // Fetch README from GitHub
    const readme = await getReadme(
      owner,
      repo,
      user.accessToken
    );

    // Analyze with AI
    const analysis = await analyzeRepository(readme);

    return res.status(200).json({
      success: true,
      analysis,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Repository analysis failed",
    });
  }
};