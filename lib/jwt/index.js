import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export const generateToken = async (userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  const cookieStore = await cookies();

  cookieStore.set("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
};

export const authToken = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("jwt");

  if (token) {
    try {
      const decoded = jwt.verify(token.value, process.env.JWT_SECRET);

      return { message: "Authorized", user: decoded };
    } catch (err) {
      console.log(err);

      return { message: "Invalid or expired token" };
    }
  } else {
    return { message: "Unauthorized" };
  }
};

export const deleteToken = async () => {
  const cookieStore = await cookies();

  cookieStore.set("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
};
