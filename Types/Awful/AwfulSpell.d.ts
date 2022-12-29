/* eslint-disable @typescript-eslint/no-explicit-any */

declare const enum AwfulSpellType {
  physical = 'physical',
  magic = 'magic',
  both = 'both',
}

interface IAwfulPowerTypes {
  mana: number;
  rage: number;
  focus: number;
  energy: number;
  combopoints: number;
  cp: number;
  runes: number;
  runicpower: number;
  soulshards: number;
  shards: number;
  astralpower: number;
  ap: number;
  lunarpower: number;
  holypower: number;
  alternatepower: number;
  maelstrom: number;
  chi: number;
  insanity: number;
  arcanecharges: number;
  fury: number;
  pain: number;
}

declare const enum CCType {
  /**
   * avoids Icebound Fortitude, Ice Form, etc.
   */
  stun = 'stun',
  /**
   * avoids Lichborne.
   */
  charm = 'charm',
  /**
   * avoids Lichborne, druid forms, etc.
   */
  polymorph = 'polymorph',
}

type AwfulSpellCallback = (
  this: void,
  spell: IAwfulSpell,
  ...args: any[]
) => void;

interface IAwfulSpellTraits {
  /**
   * For AoE Spells - The diameter or of the AoE reticle.\
   * Otherwise you can use the radius.\
   * Used by SmartAoE to know its boundaries when edging or beyond-max-ranging the AoE cast.
   */
  diameter?: number | (() => number);
  /**
   * For AoE Spells - The radius or of the AoE reticle.\
   * Otherwise you can use the diameter.\
   * Used by SmartAoE to know its boundaries when edging or beyond-max-ranging the AoE cast.
   */
  radius?: number | (() => number);
  /**
   * Whether or not the spell has a beneficial effect.\
   * Causes :Cast to avoid facing requirement. Most beneficial spells do not require facing.\
   * :Cast will avoid buffs/debuffs that absorb beneficial effects (e.g, Cyclone / Banish)\
   * This is an alternative from heal trait - which also checks for healing immunities specifically.
   */
  beneficial?: boolean;
  /**
   * The type of damage the spell does (if any).\
   * Causes :Cast to avoid attacking into immunities against the given damage type.
   */
  damage?: AwfulSpellType;
  /**
   * Whether or not the spell is a healing effect.\
   * Causes :Cast to avoid facing requirement. Most healing spells do not require facing.\
   * :Cast will avoid buffs/debuffs that absorb all healing effects (e.g, Cyclone / Banish).
   */
  heal?: boolean;
  /**
   * The effect type of the spell (if any).\
   * Causes :Cast to avoid immunities to the given effect type.
   */
  effect?: AwfulSpellType;
  /**
   * true: Causes :Cast to avoid immunities to general CC effects (e.g, Bladestorm)\
   * providing specific effect type also avoids immunities to that cc type.
   */
  cc?: boolean | CCType;
  /**
   * The spell applies a bleed effect.\
   * Causes :Cast to avoid immunities to bleeds (e.g, empowered kyrian potion)
   */
  bleed?: boolean;
  /**
   * Whether or not the spell specifically hits one unit.
   */
  targeted?: boolean;
  /**
   * Whether or not the spell is cast from range.\
   * This is currently only used for ranged physical spells.\
   * Parry does not apply to ranged physical attacks, so declaring this lets :Cast know it's okay to cast the spell into effects like Die by the Sword, Riposte, or Turbo Fists while they are facing you.
   */
  ranged?: boolean;
  /**
   * If :Cast should always force face the unit to cast, if not already facing.
   * Not really recommended, since you can add face = true to :Cast options situationally when needed.
   */
  alwaysFace?: boolean;
  /**
   * Ignore facing requirement, this spell does not require facing when casting on a unit.
   */
  ignoreFacing?: boolean;
  /**
   * Ignore LoS requirement, this spell does not require LoS when casting on a unit.
   */
  ignoreLoS?: boolean;
  /**
   * Ignore control requirement, this spell can be cast while I am in CC.
   */
  ignoreControl?: boolean;
  /**
   * This spell can be cast while moving.
   */
  ignoreMoving?: boolean;
  /**
   * This spell can be cast while casting other spells.
   */
  ignoreCasting?: boolean;
  /**
   * This spell can be cast while channeling other spells.
   */
  ignoreChanneling?: boolean;
  /**
   * This channel is worthless and my other spells can go ahead and interrupt it.
   */
  stupidChannel?: boolean;
  /**
   * This spell apply slow effect.
   */
  slow?: boolean;
  ignoreGCD?: boolean;
  /**
   * AOE ONLY\
   *  minimum offset from given pos (default: 0)
   */
  offsetMin?: number;
  /**
   * AOE ONLY\
   * maximum offset from given pos (default: radius)
   */
  offsetMax?: number;
  /**
   * AOE ONLY\
   * Number of steps between min and max dist (default: 24) ...btw,
   * the smallest allowable distance step is 0.5yd - short min/max
   * offset deficits with lots of unnecessary distance steps will
   * be ignored for obvious performance reasons
   */
  distanceSteps?: number;
  /**
   * AOE ONLY\
   * number of positions to examine in a circle around each distance step
   *  (default: 48) ...higher = more performance hungry but higher accuracy
   *  and precision
   */
  circleSteps?: number;
  /**
   * AOE ONLY\
   * if passed an object (or filter), will perform calculations using
   * predicted position of object(s) based on linear movement over
   * this duration instead of current position
   */
  movePredTime?: number;
  /**
   * AOE ONLY\
   * when sort is configured, you can control the final sorting of valid
   * cast positions, of which it will choose the top in the list.
   */
  sort?: AwfulListSortFilter<any>;
  /**
   * AOE ONLY\
   * calls this function for all OM units at each simulated cast position
   * that still hits the primary unit/position to keep a count of filter hits.
   *  searches for a cast position that is below your maxHit threshold.
   *
   * you must be extremely careful what you do inside of it to avoid performance issues
   */
  filter?: (
    obj: IAwfulUnit | IAwfulAlly | IAwfulPlayers,
    estDist: number,
    castPosition: AwfulPosition
  ) => boolean | string;
  /**
   * AOE ONLY\
   *  the maximum acceptable filter hit count to still cast the spell (default: 0)
   */
  maxHit?: number;
  /**
   * AOE ONLY\
   *  the minimum acceptable filter hit count to still cast the spell (default: 0)
   */
  minHit?: number;
  /**
   * AOE ONLY\
   * do not add enemies to units table for filter function - will only check friends.
   * very important to add this if enemies are not relevant to your filter function.
   */
  ignoreEnemies?: boolean;
  /**
   * AOE ONLY\
   * do not add friends to units table for filter function - will only check enemies.
   *  very important to add this if friends are not relevant to your filter function.
   */
  ignoreFriends?: boolean;
  /**
   * AOE ONLY\
   *  iterative array of awful objects, if you want to explicitly pass a list of objects
   *  to filter through (keep in mind, you should only pass this trait at cast time, not
   *  when initializing new spell object, otherwise the list will become stale)
   */
  units?: IAwfulList<IAwfulUnit | IAwfulPlayers | IAwfulAlly>;
  /**
   * If you want to cast by ID, to cast a lower rank version of a spell for example
   */
  castByID?: boolean;
}

interface IAwfulSpellOptions extends IAwfulSpellTraits {
  /**
   * stops moving to begin the cast
   */
  stopMoving?: boolean;
  /**
   * If :Cast should force face the unit to cast, if not already facing.
   */
  face?: boolean;
}

interface IAwfulSpellQueueParams {
  unit?: IAwfulUnit;
  options?: IAwfulSpellOptions;
  duration?: number;
}

interface IAwfulSpell {
  (this: void, callback?: string, ...args: unknown[]): boolean;
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
  range: number;
  readonly usable: boolean;
  used(this: void, time: number): boolean;
  inRange(this: void, unit: IAwfulUnit): boolean;
  Callback(key: string, func: AwfulSpellCallback): void;
  Callback(func: AwfulSpellCallback): void;
  Cast(options?: IAwfulSpellOptions): boolean;
  Cast(unit: IAwfulUnit, options?: IAwfulSpellOptions): boolean;
  Castable(options?: IAwfulSpellTraits): boolean;
  Castable(unit: IAwfulUnit, options?: IAwfulSpellTraits): boolean;
  AoECast(x: number, y: number, z: number): boolean;
  AoECast(unit: IAwfulUnit): boolean;
  SmartAoE(
    posOrUnit: IAwfulUnit | AwfulPosition,
    options?: IAwfulSpellTraits
  ): boolean;
  ClearCache(): void;
  Queue(params: IAwfulSpellQueueParams): void;
}
