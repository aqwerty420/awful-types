interface IAwfulObject {
  readonly id: number;
  readonly name: string;
  readonly pointer: IUnitId;
  Interact(): void;
}
