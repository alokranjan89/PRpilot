import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { Prisma } from "@prisma/client";

export const errorHandler = (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {

  // Zod Validation Errors
  if (error instanceof ZodError) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: error.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      })),
    });
  }

  // Prisma Errors
  if (error instanceof Prisma.PrismaClientKnownRequestError) {

    if (error.code === "P2002") {
      return res.status(409).json({
        success: false,
        message: "Resource already exists",
      });
    }

  }

  return res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });

};