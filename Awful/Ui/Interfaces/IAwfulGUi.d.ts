interface IAwfulGUi extends IAwfulContainsTab {
  Group(params: IAwfulGroupParams): IAwfulContainsTab;
  StatusFrame(params?: IAwfulStatusFrameParams): IAwfulStatusFrame;
}
