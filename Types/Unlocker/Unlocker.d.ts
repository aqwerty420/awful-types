declare const Unlocker: {
  type: string;
  Util: {
    Evaluator: {
      CallProtectedFunction: (func: string, ...args: unknown[]) => unknown;
    };
  };
};

declare const CallProtectedApi: (
  this: void,
  func: string,
  ...args: unknown[]
) => unknown;
