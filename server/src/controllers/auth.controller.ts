import { Request, Response } from "express";
import prisma from "../prisma/prisma";

export const getMe = async (
  req: Request,
  res: Response
) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user!.userId,
    },
  });

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  return res.status(200).json({
    success: true,
    user,
  });
};