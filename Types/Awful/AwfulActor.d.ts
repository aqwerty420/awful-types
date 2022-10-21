interface IAwfulNewActorParams {
  spec: AwfulSpecs;
  class: AwfulClasses;
}

interface IAwfulSpecialization {
  Init(runtime: () => void): void;
}

interface IAwfulActor {
  New(params: IAwfulNewActorParams): IAwfulSpecialization;
}
