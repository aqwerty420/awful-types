interface IAwfulDropdownParams {
  options: IAwfulDropdownOptions[];
  var: string;
  header?: string;
  multi?: boolean;
  placeholder?: string;
  default?: string | number | Array<string | number>;
  tooltip?: string;
}
