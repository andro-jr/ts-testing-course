export enum PasswordErrors {
  SHORT = "Password should be at-least 8 characters!",
  NO_UPPER_CASE = "Password must have at-least one uppercase letter",
  NO_LOWER_CASE = "Password must have at-least one lowercase letter",
}
interface CheckResult {
  isValid: boolean;
  reasons: PasswordErrors[];
}

export class PasswordChecker {
  public checkPassword(password: string): CheckResult {
    const reasons: PasswordErrors[] = [];
    if (password.length < 8) {
      reasons.push(PasswordErrors.SHORT);
    }
    if (!/[A-Z]/.test(password)) {
      reasons.push(PasswordErrors.NO_UPPER_CASE);
    }
    if (!/[a-z]/.test(password)) {
      reasons.push(PasswordErrors.NO_LOWER_CASE);
    }

    return {
      isValid: reasons.length === 0,
      reasons,
    };
  }
}
