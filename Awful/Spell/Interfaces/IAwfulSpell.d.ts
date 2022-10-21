type AwfulSpellCallback = (spell: IAwfulSpell) => void;

interface IAwfulSpell {
  (callback?: string): boolean;
  readonly baseCD: number;
  readonly castTime: number;
  readonly cd: number;
  readonly charges: number;
  readonly chargesFrac: number;
  readonly chargesMax: number;
  readonly nextChargeCD: number;
  readonly cost: IAwfulPowerTypes;
  readonly damage: number;
  readonly effect: number;
  readonly flying: boolean;
  readonly gcd: number;
  readonly id: number;
  readonly known: boolean;
  readonly name: string;
  readonly queued: boolean;
  readonly range: number;
  readonly usable: boolean;
  used(this: void, time: number): boolean;
  inRange(this: void, unit: Unit): boolean;
  Callback(
    funcOrKey: AwfulSpellCallback | string,
    func?: AwfulSpellCallback
  ): void;
  Cast(
    unitOrOptions?: Unit | IAwfulSpellTraits,
    options?: IAwfulSpellTraits
  ): boolean;
  Castable(
    unitOrOptions?: Unit | IAwfulSpellTraits,
    options?: IAwfulSpellTraits
  ): boolean;
  AoECast(xOrUnit: number | Unit, y?: number, z?: number): boolean;
  SmartAoE(
    posOrUnit: AwfulUnitOrPosition,
    options?: IAwfulSpellTraits
  ): boolean;
  ClearCache(): void;
}
