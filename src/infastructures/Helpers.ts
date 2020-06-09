import bcrypt = require("bcrypt");

export const getActualRequestDurationInMilliseconds = (start: any) => {
  const NS_PER_SEC = 1e9; // convert to nanoseconds
  const NS_TO_MS = 1e6; // convert to milliseconds
  const diff = process.hrtime(start);
  return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS;
};
export async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}
export async function validatePassword(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}
