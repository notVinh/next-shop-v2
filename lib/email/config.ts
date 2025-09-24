import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "milfdarkskin@gmail.com",
    pass: "skifzfbhqcifhfiy",
  },
});

export const mailOptions = {
  from: "vnashies<milfdarkskin@gmail.com>",
};
