interface IAwfulUi {
  New(
    name: string,
    params?: IAwfulUiParams
  ): LuaMultiReturn<[IAwfulGUi, AwfulSettings, IAwfulCommand]>;
}
