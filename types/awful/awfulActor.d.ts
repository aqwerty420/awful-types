interface AwfulNewActorParams {
  spec: AwfulSpecs;
  class: AwfulClasses;
}

interface AwfulSpecialization {
  Init(runtime: () => void): void;
  readonly ready: boolean;
}

interface AwfulActor {
  New(params: AwfulNewActorParams): AwfulSpecialization;
}
