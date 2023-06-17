type AwfulColor = [number, number, number, number];

type AwfulCommandCallback = (this: void, msg: string) => void;

type AwfulEventCallback = (this: void) => void;

type AwfulEventCallbackString = (this: void) => string;

type AwfulSettings = LuaTable<string, unknown>;

interface AwfulCheckboxParams {
  text: string;
  var: string;
  default?: boolean;
  tooltip?: string;
}

interface AwfulColorOptions {
  title?: AwfulColor | AwfulColor[];
  primary?: AwfulColor;
  accent?: AwfulColor;
  background?: AwfulColor;
  tertiary?: AwfulColor;
}

interface AwfulDropdownOptions {
  label: string;
  value: string | number;
  tooltip?: string;
}

interface AwfulDropdownParams {
  options: AwfulDropdownOptions[];
  var: string;
  header?: string;
  multi?: boolean;
  placeholder?: string;
  default?: string | number | Array<string | number>;
  tooltip?: string;
}

interface AwfulGroupParams {
  name: string;
  title?: string | string[];
  colors?: AwfulColorOptions;
}

interface AwfulSliderParams {
  text: string;
  var: string;
  min?: number;
  max?: number;
  default?: number;
  valueType?: string;
  step?: number;
  tooltip?: string;
}

interface AwfulStatusFrameParams {
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

interface AwfulStringParams {
  var: string;
}

interface AwfulTextParams {
  text: string;
  header?: boolean;
  size?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  OnClick?: AwfulEventCallback;
}

interface AwfulToggleParams {
  label: string;
  var: string;
  valueText?: AwfulEventCallbackString;
  onClick: AwfulEventCallback;
}

interface AwfulUiParams {
  title?: string | string[];
  colors?: AwfulColorOptions;
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

interface AwfulTab {
  Checkbox(params: AwfulCheckboxParams): void;
  Text(params: AwfulTextParams): void;
  Slider(params: AwfulSliderParams): void;
  Dropdown(params: AwfulDropdownParams): void;
}

interface AwfulCommand {
  New(callback: AwfulCommandCallback): void;
}

interface AwfulContainsTab {
  Tab(name: string): AwfulTab;
}

type AwfulButtonTextCallback = (state: boolean) => string;

interface AwfulButtonTextModes {
  enabled: string;
  disabled: string;
}

interface AwfulButtonParams {
  spellId: number;
  var: string;
  text: string | AwfulButtonTextCallback | AwfulButtonTextModes;
  size?: number;
}

interface AwfulStatusFrame {
  Toggle(params: AwfulToggleParams): void;
  String(params: AwfulStringParams): void;
  Button(params: AwfulButtonParams): void;
  Hide(): void;
  Show(): void;
}

interface AwfulGUi extends AwfulContainsTab {
  Group(params: AwfulGroupParams): AwfulContainsTab;
  StatusFrame(params?: AwfulStatusFrameParams): AwfulStatusFrame;
}

interface AwfulUi {
  New(
    name: string,
    params?: AwfulUiParams
  ): LuaMultiReturn<[AwfulGUi, AwfulSettings, AwfulCommand]>;
}
