interface IAwfulUiParams {
  title?: string | string[];
  colors?: IAwfulColorParams;
  width?: number;
  height?: number;
  scale?: number;
  /**
   * If you set this to true, your UI will open on each load.
   */
  show?: boolean;
  /**
   * By default, when you open the UI it will select the first tab you created. You can choose a different one by passing this variable as the tab name.
   */
  defaultTab?: string;
  /**
   * By default, the "sidebar" aka "tabs section" will grow with the width of your title. If your title is super long and you need to limit the width of the tab section and let it overflow, or you just want a different sized tab section, you can pass a specific width with this.
   */
  tabs_w?: number;
}
