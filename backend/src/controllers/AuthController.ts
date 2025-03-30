import jwt from "jsonwebtoken";
import { Request, Response } from "express";

import prisma from "../config/db.config.js";

interface LoginPayloadType {
  name: string;
  email: string;
  provider: string;
  oauth_id: string;
  image?: string;
}

class AuthController {
  static async login(request: Request, response: Response) {
    try {
      const body: LoginPayloadType = request.body;

      console.log("body in login: ", body);

      let findUser = await prisma.user.findUnique({
        where: {
          email: body.email,
        },
      });
      console.log("user find: ", findUser);

      if (!findUser) {
        findUser = await prisma.user.create({
          data: body,
        });
      }

      let JWTPayload = {
        name: body.name,
        email: body.email,
        id: findUser.id,
      };
      console.log("created jwt payload: ", JWTPayload);

      const token = jwt.sign(JWTPayload, process.env.JWT_SECRET, {
        expiresIn: "365d",
      });

      console.log("user created: ", token);

      return response.json({
        message: "Logged in successfully!",
        user: {
          ...findUser,
          token: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log("error in login: ", error);
      return response
        .status(500)
        .json({ message: "Something went wrong, Please try again" });
    }
  }
}

export default AuthController;
