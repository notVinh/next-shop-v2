import bcrypt from "bcrypt";
// Hàm hash mật khẩu
export async function hashPassword(password) {
  const saltRounds = 10; // Độ phức tạp của thuật toán
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

// Hàm kiểm tra mật khẩu
export async function verifyPassword(inputPassword, hashedPassword) {
  const isMatch = await bcrypt.compare(inputPassword, hashedPassword);
  return isMatch;
}
