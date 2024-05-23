import crypto from "crypto";

export default class Password {
  static saltSize = 16; // Size of the salt in bytes
  static iterations = 10000; // Number of iterations
  static keylen = 64; // Output key length in bytes
  static digest = "sha512"; // Digest algorithm

  static saltAndHash(rawPassword: string) {
    // Generate a random salt
    const salt = crypto.randomBytes(Password.saltSize);

    // Derive a key from the password and the salt using PBKDF2
    const hashedPassword = crypto
      .pbkdf2Sync(
        rawPassword,
        salt,
        Password.iterations,
        Password.keylen,
        Password.digest
      )
      .toString("hex");

    return { hashedPassword, salt: salt.toString("hex") };
  }

  static match(rawPassword: string, hashedPassword: string, salt: string) {
    // Convert the salt back to a buffer
    const saltBuffer = Buffer.from(salt, "hex");

    // Derive a key from the provided password and the salt using PBKDF2
    const derivedKey = crypto
      .pbkdf2Sync(
        rawPassword,
        saltBuffer,
        Password.iterations,
        Password.keylen,
        Password.digest
      )
      .toString("hex");

    // Compare the derived key with the provided hashed password
    return derivedKey === hashedPassword;
  }

  static checkStrength(password: string) {
    let score = 0;

    // Add points based on password length
    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;
    if (password.length >= 16) score += 1;

    // Add points based on character types
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSymbols = /[^a-zA-Z0-9]/.test(password);
    const characterTypes = [hasLowerCase, hasUpperCase, hasNumbers, hasSymbols];
    const numCharacterTypes = characterTypes.filter(Boolean).length;
    score += numCharacterTypes;

    // Add points for uniqueness of characters
    const uniqueCharacters = new Set(password).size;
    score += Math.min((uniqueCharacters / password.length) * 4, 4);

    // Cap the score at 10
    score = Math.min(score, 10);

    return score;
  }
}