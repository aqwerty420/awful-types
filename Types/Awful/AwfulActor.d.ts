interface IAwfulNewActorParams {
  spec: AwfulSpecs;
  class: AwfulClasses;
}

interface IAwfulSpecialization {
  Init(runtime: () => void): void;
  readonly ready: boolean;
}

interface IAwfulActor {
  New(params: IAwfulNewActorParams): IAwfulSpecialization;
}
