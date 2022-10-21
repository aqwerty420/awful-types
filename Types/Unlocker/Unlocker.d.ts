declare const Unlocker: {
  type: string;
  Util: {
    Evaluator: {
      CallProtectedFunction: (func: string, ...args: unknown[]) => unknown;
    };
  };
};

declare const CallProtectedApi: (func: string, ...args: unknown[]) => unknown;
