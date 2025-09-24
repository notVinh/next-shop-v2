import bcrypt from "bcryptjs";
// Hàm hash mật khẩu
export async function hashPassword(password: string) {
  const saltRounds = 10; // Độ phức tạp của thuật toán
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

// Hàm kiểm tra mật khẩu
export async function verifyPassword(
  inputPassword: string,
  hashedPassword: string
) {
  const isMatch = await bcrypt.compare(inputPassword, hashedPassword);
  return isMatch;
}
