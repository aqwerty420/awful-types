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

type AwfulPosition = LuaMultiReturn<[number, number, number]>;

type AwfulUnknownEventCallback = (this: void, ...args: unknown[]) => void;

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
  PetAttack(this: void): void;
}

interface IAwful {
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
    callback: () => void,
    onRoutineRun?: boolean
  ): void;
  inverse(this: void, rotation: number): number;
  Draw(
    this: void,
    callback: (this: void, draw: IAwfulDrawer) => void
  ): IAwfulDraw;
  //Command(this: void, command: string, e: boolean): Command;

  alert(this: void, message: string, texture: number): boolean;
  alert(this: void, options: AwfulAlertOptions): boolean;

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
