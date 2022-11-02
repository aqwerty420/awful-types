declare const enum AwfulClasses {
  warrior = 'warrior',
  warlock = 'warlock',
  shaman = 'shaman',
  rogue = 'rogue',
  druid = 'druid',
  hunter = 'hunter',
  mage = 'mage',
  monk = 'monk',
  paladin = 'paladin',
  priest = 'priest',
  deathKnight = 'deathknight',
}

declare const enum AwfulRoles {
  healer = 'healer',
  melee = 'melee',
  ranged = 'ranged',
  tank = 'tank',
  pet = 'pet',
}

declare const enum AwfulSpecs {
  First = 1,
  Second = 2,
  Third = 3,
}

declare const enum AwfulClassSpecs {
  blood = 'Blood',
  frost = 'Frost',
  unholy = 'Unholy',
  havoc = 'Havoc',
  vengeance = 'Vengeance',
  balance = 'Balance',
  feral = 'Feral',
  guardian = 'Guardian',
  restoration = 'Restoration',
  beastMastery = 'Beast Mastery',
  marksmanship = 'Marksmanship',
  survival = 'Survival',
  arcane = 'Arcane',
  fire = 'Fire',
  brewmaster = 'Brewmaster',
  mistweaver = 'Mistweaver',
  windwalker = 'Windwalker',
  holy = 'Holy',
  protection = 'Protection',
  retribution = 'Retribution',
  discipline = 'Discipline',
  shadow = 'Shadow',
  assassination = 'Assassination',
  outlaw = 'Outlaw',
  subtlety = 'Subtlety',
  elemental = 'Elemental',
  enhancement = 'Enhancement',
  affliction = 'Affliction',
  demonology = 'Demonology',
  destruction = 'Destruction',
  arms = 'Arms',
  fury = 'Fury',
  devastation = 'Devastation',
  preservation = 'Preservation',
}

type AwfulPosition = LuaMultiReturn<[number, number, number]>;

type AwfulUnknownEventCallback = (this: void, ...args: unknown[]) => void;

type AwfulPath = LuaMultiReturn<[IAwfulPath, number]>;

type AwfulPathOrFalse = IAwfulPath | false;

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

declare interface IAwfulProtected {
  RunMacroText(this: void, text: string): void;
  //TargetUnit: typeof TargetUnit;
  //UseInventoryItem: typeof UseInventoryItem;
  PetAttack: typeof PetAttack;
  //AttackTarget: typeof AttackTarget;
  //UseItemByName: typeof UseItemByName;
}

interface IAwfulPath extends LuaMultiReturn<[AwfulPosition[], number]> {
  simplify(this: void, tolerance: number, highestQuality: number): AwfulPathOrFalse;
  draw(this: void): IAwfulDraw;
  follow(this: void): void;
}

interface IAwful {
  // path if using two AwfulPositions
  path(
    this: void,
    player: AwfulPosition,
    target: AwfulPosition
  ): AwfulPathOrFalse;

  // path if using two coord sets
  path(
    this: void,
    x: number,
    y: number,
    z: number,
    x2: number,
    y2: number,
    z2: number
  ): AwfulPathOrFalse;

  // path if using 1 AwfulPosition and 1 Coord set
  path(
    this: void,
    player: AwfulPosition,
    x2: number,
    y2: number,
    z2: number
  ): AwfulPathOrFalse;

  // path if using 1 coord set and 1 AwfulPosition
  path(
    this: void,
    x: number,
    y: number,
    z: number,
    target: AwfulPosition,
  ): AwfulPathOrFalse;

  NewSpell(
    this: void,
    spellId: number | number[],
    spellTraits?: IAwfulSpellTraits
  ): IAwfulSpell;
  NewItem(this: void, itemIds: number | number[] | string | string[]): Item;
  Populate(this: void, ...args: unknown[]): void;
  addEventCallback(
    this: void,
    callbackFunction: AwfulUnknownEventCallback,
    callbackEvent?: string
  ): void;
  immerseOL(this: void, list: Unit[]): void;
  addUpdateCallback(
    this: void,
    callback: (this: void) => void,
    onRoutineRun?: boolean
  ): void;
  inverse(this: void, rotation: number): number;
  Draw(
    this: void,
    callback: (this: void, draw: IAwfulDrawer) => void
  ): IAwfulDraw;
  //Command(this: void, command: string, e: boolean): Command;

  alert(this: void, message?: string, texture?: number): boolean;
  alert(this: void, options?: AwfulAlertOptions): boolean;

  hookSpellCasts(
    this: void,
    callback: (this: void, spell?: IAwfulSpell, key?: string) => void
  ): void;

  // Config
  DevMode: boolean;
  ttd_enabled: boolean;

  readonly UI: IAwfulUi;
  readonly Actor: IAwfulActor;
  readonly player: Player;
  readonly target: Unit;
  readonly focus: Unit;
  readonly healer: Ally;
  readonly enemyHealer: Players;
  readonly pet: Unit;
  readonly [key: `arena${number}`]: Players;
  readonly [key: `party${number}`]: Ally;
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
  readonly enabled: boolean;
  // Lists
  /** Group that does not contains player */
  readonly group: IAwfulList<Ally>;
  /** Group that contains player */
  readonly fGroup: IAwfulList<Ally>;
  /** Group that contains player */
  readonly fullGroup: IAwfulList<Ally>;
  readonly enemies: IAwfulList<Unit>;
  readonly friends: IAwfulList<Ally>;
  readonly totems: IAwfulList<Unit>;
  readonly seeds: IAwfulList<Unit>;
  readonly units: IAwfulList<Unit>;
  readonly pets: IAwfulList<Unit>;
  readonly players: IAwfulList<Players>;
  readonly explosives: IAwfulList<Unit>;
  readonly shades: IAwfulList<Unit>;
  readonly objects: IAwfulList<IObject>;
  readonly triggers: IAwfulList<ITrigger>;
  readonly protected: IAwfulProtected;
}

declare const awful: IAwful;

declare function getfenv(n: number): unknown;
