type AwfulColor = [number, number, number, number];

type AwfulCommandCallback = (this: void, msg: string) => void;

type AwfulEventCallback = (this: void) => void;

type AwfulEventCallbackString = (this: void) => string;

type AwfulSettings = LuaTable<string, unknown>;

interface IAwfulCheckboxParams {
  text: string;
  var: string;
  default?: boolean;
  tooltip?: string;
}

interface IAwfulColorParams {
  title?: AwfulColor | AwfulColor[];
  primary?: AwfulColor;
  accent?: AwfulColor;
  background?: AwfulColor;
  tertiary?: AwfulColor;
}

interface IAwfulDropdownOptions {
  label: string;
  value: string | number;
  tooltip?: string;
}

interface IAwfulDropdownParams {
  options: IAwfulDropdownOptions[];
  var: string;
  header?: string;
  multi?: boolean;
  placeholder?: string;
  default?: string | number | Array<string | number>;
  tooltip?: string;
}

interface IAwfulGroupParams {
  name: string;
  title?: string | string[];
  colors?: IAwfulColorParams;
}

interface IAwfulSliderParams {
  text: string;
  var: string;
  min?: number;
  max?: number;
  default?: number;
  valueType?: string;
  step?: number;
  tooltip?: string;
}

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

interface IAwfulStringParams {
  var: string;
}

interface IAwfulTextParams {
  text: string;
  header?: boolean;
  size?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  OnClick?: AwfulEventCallback;
}

interface IAwfulToggleParams {
  label: string;
  var: string;
  valueText?: AwfulEventCallbackString;
  onClick: AwfulEventCallback;
}

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

interface IAwfulTab {
  Checkbox(params: IAwfulCheckboxParams): void;
  Text(params: IAwfulTextParams): void;
  Slider(params: IAwfulSliderParams): void;
  Dropdown(params: IAwfulDropdownParams): void;
}

interface IAwfulCommand {
  New(callback: AwfulCommandCallback): void;
}

interface IAwfulContainsTab {
  Tab(name: string): IAwfulTab;
}

interface IAwfulStatusFrame {
  Toggle(params: IAwfulToggleParams): void;
  String(params: IAwfulStringParams): void;
}

interface IAwfulGUi extends IAwfulContainsTab {
  Group(params: IAwfulGroupParams): IAwfulContainsTab;
  StatusFrame(params?: IAwfulStatusFrameParams): IAwfulStatusFrame;
}

interface IAwfulUi {
  New(
    name: string,
    params?: IAwfulUiParams
  ): LuaMultiReturn<[IAwfulGUi, AwfulSettings, IAwfulCommand]>;
}
