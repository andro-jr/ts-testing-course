import { v4 } from "uuid";

export type StringInfo = {
  lowerCase?: string;
  upperCase?: string;
  characters?: string[];
  length: number;
  extraInfo: Object | undefined;
};

export function calculateComplexity(stringInfo: StringInfo) {
  return Object.keys(stringInfo.extraInfo).length * stringInfo.length;
}

type LoggerServiceCallback = (arg: string) => void;

export function toUpperCaseWithCb(
  arg: string,
  callback: LoggerServiceCallback
) {
  if (!arg) {
    callback("Invalid Argument");
    return;
  }

  callback(`called function with ${arg}`);

  return arg.toUpperCase();
}

export class OtherStringUtils {
  public toUpperCase(arg: string) {
    return arg.toUpperCase();
  }
  public logString(arg: string) {
    console.log(arg);
  }
  public callExternalServices() {
    console.log("calling external services");
  }
}

export function toUpperCase(arg: string) {
  return arg.toUpperCase();
}
export function toLowerCaseWithId(arg: string) {
  return arg.toLowerCase() + v4();
}
