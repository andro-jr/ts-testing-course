export class StringUtils {
  public toUpperCase(arg: string) {
    if (!arg) throw new Error("Invalid string");
    return toUppercase(arg);
  }
}

export function toUppercase(arg: string) {
  return arg.toUpperCase();
}

export type StringInfo = {
  lowerCase: string;
  upperCase: string;
  characters: string[];
  length: number;
  extraInfo: Object | undefined;
};

export function getStringInfo(arg: string): StringInfo {
  return {
    lowerCase: arg.toLowerCase(),
    upperCase: arg.toUpperCase(),
    characters: Array.from(arg),
    length: arg.length,
    extraInfo: {},
  };
}
