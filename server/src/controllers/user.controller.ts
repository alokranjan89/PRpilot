import { Request, Response } from "express";
import asyncHandler from "../utils/asyncHandler";
import * as userService from "../services/user.service";
import { createUserSchema } from "../validators/user.validator";

export const createUser = asyncHandler(
  async (req: Request, res: Response) => {
    const validatedData = createUserSchema.parse(req.body);

    const user = await userService.createUser(
      validatedData.name,
      validatedData.email
    );

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  }
);

export const getUsers = asyncHandler(
  async (req: Request, res: Response) => {
    const users = await userService.getUsers();

    return res.status(200).json({
      success: true,
      data: users,
    });
  }
);