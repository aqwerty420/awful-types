declare const enum AwfulClasses {
  Warrior = 'warrior',
  Warlock = 'warlock',
  Shaman = 'shaman',
  Rogue = 'rogue',
  Druid = 'druid',
  Hunter = 'hunter',
  Mage = 'mage',
  Monk = 'monk',
  Paladin = 'paladin',
  Priest = 'priest',
  DeathKnight = 'deathknight',
  Evoker = 'evoker',
}

declare const enum AwfulRoles {
  Healer = 'healer',
  Melee = 'melee',
  Ranged = 'ranged',
  Tank = 'tank',
  Pet = 'pet',
}

declare const enum AwfulSpecs {
  First = 1,
  Second = 2,
  Third = 3,
  Fourth = 4,
}

declare const enum AwfulClassSpecs {
  Blood = 'Blood',
  Frost = 'Frost',
  Unholy = 'Unholy',
  Havoc = 'Havoc',
  Vengeance = 'Vengeance',
  Balance = 'Balance',
  Feral = 'Feral',
  Guardian = 'Guardian',
  Restoration = 'Restoration',
  BeastMastery = 'Beast Mastery',
  Marksmanship = 'Marksmanship',
  Survival = 'Survival',
  Arcane = 'Arcane',
  Fire = 'Fire',
  Brewmaster = 'Brewmaster',
  Mistweaver = 'Mistweaver',
  Windwalker = 'Windwalker',
  Holy = 'Holy',
  Protection = 'Protection',
  Retribution = 'Retribution',
  Discipline = 'Discipline',
  Shadow = 'Shadow',
  Assassination = 'Assassination',
  Outlaw = 'Outlaw',
  Subtlety = 'Subtlety',
  Elemental = 'Elemental',
  Enhancement = 'Enhancement',
  Affliction = 'Affliction',
  Demonology = 'Demonology',
  Destruction = 'Destruction',
  Arms = 'Arms',
  Fury = 'Fury',
  Devastation = 'Devastation',
  Preservation = 'Preservation',
}

type AwfulPosition = LuaMultiReturn<[number, number, number]>;

type AwfulUnknownEventCallback<T> = (
  this: void,
  info: T,
  event: string,
  source: AwfulUnit | AwfulObject,
  dest: AwfulUnit | AwfulObject
) => void;

type AwfulPathReturn = LuaMultiReturn<[AwfulPath, number]> | false;

type AwfulAlertOptions = {
  message?: string;
  texture?: number;
  duration?: number;
  fadeIn?: number;
  fadeOut?: number;
  bgColor?: AwfulColor;
  imgX?: number;
  imgY?: number;
  imgScale?: number;
};

interface AwfulDelay {
  now: number;
}

interface AwfulPath extends LuaMultiReturn<[AwfulPosition[], number]> {
  simplify(
    this: void,
    tolerance: number,
    highestQuality: number
  ): AwfulPathReturn;

  draw(this: void): AwfulDraw;

  follow(this: void): void;
}

interface Awful {
  // path if using two AwfulPositions
  path(
    this: void,
    player: AwfulPosition,
    target: AwfulPosition
  ): AwfulPathReturn;

  // path if using two coord sets
  path(
    this: void,
    x: number,
    y: number,
    z: number,
    x2: number,
    y2: number,
    z2: number
  ): AwfulPathReturn;

  // path if using 1 AwfulPosition and 1 Coord set
  path(
    this: void,
    player: AwfulPosition,
    x2: number,
    y2: number,
    z2: number
  ): AwfulPathReturn;

  // path if using 1 coord set and 1 AwfulPosition
  path(
    this: void,
    x: number,
    y: number,
    z: number,
    target: AwfulPosition
  ): AwfulPathReturn;

  NewSpell(
    this: void,
    spellId: number | number[],
    spellTraits?: AwfulSpellTraits
  ): AwfulSpell;

  NewItem(
    this: void,
    itemIds: number | number[] | string | string[]
  ): AwfulItem;

  Populate(this: void, ...args: unknown[]): void;

  addEventCallback(
    this: void,
    callbackFunction: AwfulUnknownEventCallback<unknown>
  ): void;

  addEventCallback(
    this: void,
    callbackFunction: AwfulUnknownEventCallback<unknown>,
    callbackEvent: string
  ): void;

  addEventCallback<T>(
    this: void,
    callbackFunction: AwfulUnknownEventCallback<T>,
    callbackEvent: string
  ): void;

  onEvent(
    this: void,
    callbackFunction: AwfulUnknownEventCallback<unknown>
  ): void;

  onEvent(
    this: void,
    callbackFunction: AwfulUnknownEventCallback<unknown>,
    callbackEvent: string
  ): void;

  onEvent<T>(
    this: void,
    callbackFunction: AwfulUnknownEventCallback<T>,
    callbackEvent: string
  ): void;

  immerseOL(this: void, list: AwfulUnit[]): void;

  addUpdateCallback(
    this: void,
    callback: (this: void) => void,
    onRoutineRun?: boolean
  ): void;

  inverse(this: void, rotation: number): number;

  Draw(
    this: void,
    callback: (this: void, draw: AwfulDrawer) => void
  ): AwfulDraw;

  //Command(this: void, command: string, e: boolean): Command;

  alert(this: void, message?: string, texture?: number): boolean;

  alert(this: void, options?: AwfulAlertOptions): boolean;

  hookSpellCasts(
    this: void,
    callback: (this: void, spell?: AwfulSpell, key?: string) => void
  ): void;

  FightRemains(this: void): number;

  textureEscape(
    this: void,
    texture: number,
    size?: number,
    offset?: string
  ): string;

  GetObjectWithGUID(this: void, guid: string): AwfulUnit;

  /**
   * Set to true to enable dev mode.\
   * Ignored on published rotations.
   */
  DevMode: boolean;

  /** Set to true to enable time to die features. */
  ttd_enabled: boolean;

  delay(this: void, min: number, max: number, frequency?: number): AwfulDelay;

  readonly UI: AwfulUi;
  readonly Actor: AwfulActor;
  readonly player: AwfulPlayer;
  readonly target: AwfulUnit;
  readonly focus: AwfulUnit;
  readonly healer: AwfulAlly;
  readonly enemyHealer: AwfulPlayers;
  readonly pet: AwfulUnit;
  readonly [key: `arena${number}`]: AwfulPlayers;
  readonly [key: `party${number}`]: AwfulAlly;
  readonly time: number;
  readonly buffer: number;
  readonly latency: number;
  readonly tickRate: number;
  readonly spellCastBuffer: number;
  readonly gcd: number;
  readonly hasControl: number;
  readonly zone: string;
  readonly mapID: number;
  readonly burst: boolean;
  enabled: boolean;
  readonly pullTimer: number;

  /** Group that contains all enemy units/players regardless of their combat status, excluding charmed enemies such as mind controlled group members. */
  readonly allEnemies: AwfulList<AwfulUnit>;

  /** Group that does not contains player. */
  readonly group: AwfulList<AwfulAlly>;

  /** Group that contains player. */
  readonly fGroup: AwfulList<AwfulAlly>;

  /** Group that contains player. */
  readonly fullGroup: AwfulList<AwfulAlly>;

  /** Enemies around the player. */
  readonly enemies: AwfulList<AwfulUnit>;

  /** Friendly units around the player. */
  readonly friends: AwfulList<AwfulAlly>;

  /** Totems around the player. */
  readonly totems: AwfulList<AwfulUnit>;

  readonly seeds: AwfulList<AwfulUnit>;

  /** Units around the player. */
  readonly units: AwfulList<AwfulUnit>;

  readonly pets: AwfulList<AwfulUnit>;

  /** Other players around the player. */
  readonly players: AwfulList<AwfulPlayers>;

  /** Explosives of the M+ Explosive affix. */
  readonly explosives: AwfulList<AwfulUnit>;

  /** Shades of the M+ Spiteful affix. */
  readonly shades: AwfulList<AwfulUnit>;

  readonly tyrants: AwfulList<AwfulUnit>;

  readonly wwclones: AwfulList<AwfulUnit>;

  /** Objects around the player. */
  readonly objects: AwfulList<AwfulObject>;

  /** Triggers around the player. */
  readonly triggers: AwfulList<AwfulTrigger>;

  call(this: void, name: string, ...args: unknown[]): unknown;

  call<T extends (...args: unknown[]) => unknown>(
    name: string,
    ...args: Parameters<T>
  ): ReturnType<T>;

  StopMoving(this: void): void;

  controlMovement(this: void, duration: number, facing: boolean): void;

  unlock(this: void, name: string): (...args: unknown[]) => unknown;

  unlock<T extends (...args: unknown[]) => unknown>(
    this: void,
    name: string
  ): T;
}

declare const awful: Awful;

declare function getfenv(n: number): unknown;
