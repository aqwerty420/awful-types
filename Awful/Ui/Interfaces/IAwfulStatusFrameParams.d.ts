interface IAwfulStatusFrameParams {
  colors?: {
    enabled?: AwfulColor;
    disabled?: AwfulColor;
    value?: AwfulColor;
    primary?: AwfulColor;
    background?: AwfulColor;
  };
  fontSize?: number;
  maxWidth?: number;
  column?: boolean;
}
