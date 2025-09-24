import axios from "axios";

export const clearCookies = async () => {
  await axios.post("/api/user/signout");
};

export const loginAccount = async (account: {
  email: string;
  password: string;
}) => {
  const res = await axios.post("/api/auth", account);
  return res.data;
};

export const signupAccount = async (account: {
  name: string;
  email: string;
  password: string;
}) => {
  const res = await axios.post("/api/user/signup", account);
  return res.data;
};

export const verifyAccount = async (account: {
  email: string;
  otp: string;
}) => {
  const res = await axios.post("/api/user/verify", account);
  return res.data;
};
