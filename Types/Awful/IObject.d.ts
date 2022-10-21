interface IObject {
  readonly id: number;
  readonly name: string;
  readonly pointer: IUnitId;
  Interact(): void;
}
