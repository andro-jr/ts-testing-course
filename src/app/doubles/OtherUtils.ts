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
