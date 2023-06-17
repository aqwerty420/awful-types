interface AwfulItem {
  readonly numEquipped: number;
  readonly equipped: boolean;
  readonly casttimeraw: number;
  readonly casttime: number;
  readonly name: string;
  readonly usable: boolean;
  readonly count: number;
  readonly range: number;
  readonly cooldown: number;
  readonly id: number;
  Use(unit?: AwfulUnit): boolean;
  UseAoE(unit: AwfulUnit): boolean;
  UseAoE(x: number, y: number, z: number): boolean;
}
