/**
 * [id, name, remains, drCat, sourceGUID]
 */
type CCInfo = [number, string, number, string, number];

type CCInfoList = readonly CCInfo[];

interface AwfulMovingParams {
  angle?: number;
  duration?: number;
}

interface AwfulUnit {
  canAttack(this: void, unit: AwfulUnit): boolean;

  /**
   * Compares the object with another to determine if they're the same
   */
  isUnit(this: void, unit: AwfulUnit): boolean;

  /**
   * Checks if the unit is friends with another unit
   */
  friendOf(this: void, unit: AwfulUnit): boolean;

  /**
   * Provides information about a specific buff on the object
   *
   * {@link https://wowpedia.fandom.com/wiki/API_UnitAura}
   *
   * @param nameOrId The name or id of the desired buff
   * @param sourceUnit The source unit of the desired buff
   *
   * @returns The buff info if the buff is found, otherwise null
   */
  buff(
    this: void,
    nameOrId: string | number,
    sourceUnit?: AwfulUnit
  ): LuaMultiReturn<Aura> | undefined;

  /**
   * The time remaining of a specific buff on the object.
   *
   * @param nameOrId The name or id of the desired buff
   * @param sourceUnit The source unit of the desired buff
   */
  buffRemains(
    this: void,
    nameOrId: string | number,
    sourceUnit?: AwfulUnit
  ): number;

  /**
   * The base duration of a specific buff on the object
   *
   * @param nameOrId The name or id of the desired buff
   * @param sourceUnit The source unit of the desired buff
   */
  buffDuration(
    this: void,
    nameOrId: string | number,
    sourceUnit?: AwfulUnit
  ): number;

  /**
   * Number of stacks the object has for a buff
   *
   * @param nameOrId The name or id of the desired buff
   * @param sourceUnit The source unit of the desired buff
   */
  buffStacks(
    this: void,
    nameOrId: string | number,
    sourceUnit?: AwfulUnit
  ): number;

  /**
   * The amount of time that the given buff has been active on the object
   *
   * @param nameOrId The name or id of the desired buff
   * @param sourceUnit The source unit of the desired buff
   */
  buffUptime(
    this: void,
    nameOrId: string | number,
    sourceUnit?: AwfulUnit
  ): number;

  /**
   * Query the object for a list of active buffs
   *
   * @param namesOrIds The names or ids of the desired buffs
   * @param sourceUnit The source unit of the desired buffs
   */
  buffFrom(
    this: void,
    namesOrIds: string[] | number[],
    sourceUnit?: AwfulUnit
  ): Aura[];

  /**
   * Query the object for the number of active buffs matching the Spell IDs / Spell Names within the given array
   *
   * @param namesOrIds The names or ids of the desired buffs
   * @param sourceUnit The source unit of the desired buffs
   */
  buffsFrom(
    this: void,
    namesOrIds: string[] | number[],
    sourceUnit?: AwfulUnit
  ): number;

  /**
   * Provides information about a specific debuff on the object
   *
   * {@link https://wowpedia.fandom.com/wiki/API_UnitAura}
   *
   * @param nameOrId The name or id of the desired buff
   * @param sourceUnit The source unit of the desired buff
   * @returns The buff info if the buff is found, otherwise null
   */
  debuff(
    this: void,
    nameOrId: string | number,
    sourceUnit?: AwfulUnit
  ): LuaMultiReturn<Aura> | undefined;

  /**
   * The time remaining of a specific debuff on the object
   *
   * @param nameOrId The name or id of the desired debuff
   * @param sourceUnit The source unit of the desired debuff
   */
  debuffRemains(
    this: void,
    nameOrId: string | number,
    sourceUnit?: AwfulUnit
  ): number;

  /**
   * The base duration of a specific debuff on the object
   *
   * @param nameOrId The name or id of the desired debuff
   * @param sourceUnit The source unit of the desired debuff
   */
  debuffDuration(
    this: void,
    nameOrId: string | number,
    sourceUnit?: AwfulUnit
  ): number;

  /**
   * Number of stacks the object has for a debuff
   *
   * @param nameOrId The name or id of the desired debuff
   * @param sourceUnit The source unit of the desired debuff
   */
  debuffStacks(
    this: void,
    nameOrId: string | number,
    sourceUnit?: AwfulUnit
  ): number;

  /**
   * The amount of time that the given debuff has been active on the object
   *
   * @param nameOrId The name or id of the desired debuff
   * @param sourceUnit The source unit of the desired debuff
   */
  debuffUptime(
    this: void,
    nameOrId: string | number,
    sourceUnit?: AwfulUnit
  ): number;

  /**
   * Query the object for a list of active debuffs
   *
   * @param namesOrIds The names or ids of the desired debuffs
   * @param sourceUnit The source unit of the desired debuffs
   */
  debuffFrom(
    this: void,
    namesOrIds: string[] | number[],
    sourceUnit?: AwfulUnit
  ): Aura[];

  /**
   * Query the object for the number of active debuffs matching the Spell IDs / Spell Names within the given array
   *
   * @param namesOrIds The names or ids of the desired debuffs
   * @param sourceUnit The source unit of the desired debuffs
   */
  debuffsFrom(
    this: void,
    namesOrIds: string[] | number[],
    sourceUnit?: AwfulUnit
  ): number;

  /**
   * Estimates the cooldown of any Unit's spell based on combat log event tracking happening in the background by the framework
   *
   * @param nameOrId The name or id of the spell to check
   */
  cooldown(this: void, nameOrId: string | number): number;

  /**
   * Checks if the Unit has cast the given spell in the past x seconds, based on combat log event tracking happening in the background by the framework
   *
   * @param nameOrId The name or id of the spell to check
   * @param duration The number of seconds to check for
   */
  used(this: void, nameOrId: string | number, duration: number): boolean;

  /**
   * Distance between the object and another object, accounting for combat reach and bounding radius
   *
   * @param unit The unit to check.
   */
  distanceTo(this: void, unit: AwfulUnit): number;

  /**
   * Distance between the object and another object
   *
   * @param unitOrPosition The unit or position to check
   */
  distanceToLiteral(
    this: void,
    unitOrPosition: AwfulUnit | AwfulPosition
  ): number;

  /**
   * Checks if the object is facing another object [at a 180 degree angle by default - the required facing angle to cast spells]
   *
   * @param unit The unit to check.
   * @param angle The angle to check for.
   */
  facing(this: void, unit: AwfulUnit, angle?: number): boolean;

  /**
   * Checks if the object is facing a given position [at a 180 degree angle by default - the required facing angle to cast spells]
   *
   * @param x The x coordinate to check
   * @param y The y coordinate to check
   * @param z The z coordinate to check
   * @param angle The angle to check for
   */
  facingPosition(
    this: void,
    x: number,
    y: number,
    z: number,
    angle?: number
  ): boolean;

  /**
   * Checks if the object and another object are in line of sight of each other.
   *
   * @param unit The unit to check.
   */
  losOf(this: void, unit: AwfulUnit): boolean;

  /**
   * Checks LoS without accounting for LoS-impairing effects like smoke bomb.
   *
   * @param unit The unit to check.
   */
  losOfLiteral(this: void, unit: AwfulUnit): boolean;

  /**
   * Current 3D position of the object.
   */
  position(this: void): AwfulPosition;

  /**
   * The object's estimated position after the given time, based on current velocity & moving direction.
   *
   * @param time The time in seconds.
   */
  predictPosition(this: void, time: number): AwfulPosition;

  /**
   * The object's estimated distance from the given Awful Object after the given time has elapsed.
   *
   * @param time The time in seconds.
   * @param unit Unit to check or player if not specified.
   */
  predictDistance(this: void, time: number, unit?: AwfulUnit): number;

  /**
   * The object's estimated distance from the given Awful Object after the given time has elapsed (ignoring combat reach)
   *
   * @param time The time in seconds.
   * @param unit Unit to check or player if not specified.
   */
  predictDistanceLiteral(this: void, time: number, unit?: AwfulUnit): number;

  /**
   *  The object's estimated distance from the given position after the given time has elapsed.
   *
   * @param x The x coordinate to check.
   * @param y The y coordinate to check.
   * @param z The z coordinate to check.
   * @param time The time in seconds.
   */
  predictDistanceToPosition(
    this: void,
    x: number,
    y: number,
    z: number,
    time: number
  ): number;

  /**
   * Estimates whether the object will be in line of sight.
   *
   * @param time The time in seconds.
   * @param unit The unit to check or player if not specified.
   */
  predictLoS(this: void, time: number, unit?: AwfulUnit): boolean;

  /**
   * Checks if the unit is in melee range of another unit.
   *
   * @param unit The unit to check.
   */
  meleeRangeOf(this: void, unit: AwfulUnit): boolean;

  /**
   * Checks if the unit is / has been moving toward another unit.
   *
   * @param unit The unit to check.
   * @param params The angle (default 30) is in degrees and duration (default 0) in seconds.
   */
  movingToward(
    this: void,
    unit: AwfulUnit,
    params?: AwfulMovingParams
  ): boolean;

  /**
   * Checks if the unit is / has been moving away from another unit.
   *
   * @param unit The unit to check.
   * @param params The angle (default 220) is in degrees and duration (default 0) in seconds.
   */
  movingAwayFrom(
    this: void,
    unit: AwfulUnit,
    params?: AwfulMovingParams
  ): boolean;

  setTarget(this: void): void;

  face(this: void): void;

  setFocus(this: void): void;

  TimeToX(this: void, percentage: number, minSamples?: number): number;

  TimeToDie(this: void, minSamples?: number): number;

  /**
   * Number of units attacking the unit
   * @return 0 - total
   * @return 1 - melee
   * @return 2 - ranged
   * @return 3 - cooldowns
   */
  v2attackers(this: void): LuaMultiReturn<[number, number, number, number]>;

  predictLoSOf(this: void, unit: AwfulUnit, elapsed: number): boolean;

  predictLoSOf(this: void, elapsed: number): boolean;

  /**
   * Value between 0-255 based on their scaled threat percentage if they are on the threat table, returning -1 with no threat
   */
  threatWith(this: void, unit: AwfulUnit): number;

  readonly unit: string;

  /**
   * Check if the unit exists.
   */
  readonly exists: boolean;

  /**
   * The object's id or 0 for players.
   */
  readonly id: number;

  /**
   * Amount of absorption (shields) remaining on the object.
   */
  readonly absorbs: number;

  /**
   * Check if the unit is in combat.
   */
  readonly combat: boolean;

  /**
   * Check if the unit is dead.
   */
  readonly dead: boolean;

  /**
   * Check if the unit is an enemy.
   */
  readonly enemy: boolean;

  /**
   * Check if the unit is an ally.
   */
  readonly ally: boolean;

  /**
   * Get the unit creator.
   */
  readonly creator: AwfulUnit;

  /**
   * Check if the unit is friendly.
   */
  readonly friend: boolean;

  /**
   * Check if unit is a player
   */
  readonly isPlayer: boolean;

  /**
   * Check if unit is a pet
   */
  readonly isPet: boolean;

  /**
   * The GUID of the object
   */
  readonly guid: string;

  /**
   * The health of the object in percentage
   */
  readonly hp: number;

  /**
   * Actual current health of object, as returned from UnitHealth\
   * {@link https://wowwiki-archive.fandom.com/wiki/API_UnitHealth}
   */
  readonly health: number;

  /**
   * Max health of object, as returned from UnitHealthMax\
   * {@link https://wowwiki-archive.fandom.com/wiki/API_UnitHealthMax}
   */
  readonly healthMax: number;

  /**
   * The height of the object.
   */
  readonly height: number;

  readonly level: number;

  readonly name: string;

  readonly pointer: IUnitId;

  readonly race?: string;

  readonly stealth: number;

  /**
   * Can be an empty object.
   */
  readonly target: AwfulUnit;

  /**
   * Checks if the unit is visible (within render range).
   */
  readonly visible: boolean;

  /**
   * Returns number of buffs the unit has.
   */
  readonly buffCount: number;

  /**
   * Returns an array of all buffs the unit has. Each buff is indexed appropriately, and contains all UnitBuff returns.\
   * {@link https://wowpedia.fandom.com/wiki/API_UnitAura}
   */
  readonly buffs: Aura[];

  /**
   * Returns number of debuffs the unit has.
   */
  readonly debuffCount: number;

  /**
   * Returns an array of all debuffs the unit has. Each debuff is indexed appropriately, and contains all UnitDebuff returns.\
   * {@link https://wowpedia.fandom.com/wiki/API_UnitAura}
   */
  readonly debuffs: Aura[];

  /**
   * Returns an array of all returns provided by UnitBuff on the object at the given index. You must provide a specific index to this attribute to get the appropriate return.\
   * {@link https://wowpedia.fandom.com/wiki/API_UnitAura}
   */
  readonly [key: `buff${number}`]: LuaMultiReturn<Aura>;

  /**
   * Returns an array of all returns provided by UnitDebuff on the object at the given index. You must provide a specific index to this attribute to get the appropriate return.\
   * {@link https://wowpedia.fandom.com/wiki/API_UnitAura}
   */
  readonly [key: `debuff${number}`]: LuaMultiReturn<Aura>;

  /**
   * Returns an array of description text for each buff the unit has. Can parse these descriptions to determine whether or not the unit has an effect of a certain type, or get creative with it! The indexing of the descriptions correspond with their parent buffs.
   */
  readonly buffDescriptions: string[];

  /**
   * Returns an array of description text for each debuff the unit has. Can parse these descriptions to determine whether or not the unit has an effect of a certain type, or get creative with it! The indexing of the descriptions correspond with their parent debuffs.
   */
  readonly debuffDescriptions: string[];

  /**
   * Returns true if the object has offensive cooldowns up.
   */
  readonly cds: boolean;

  readonly charmed: boolean;

  readonly dotted: boolean;

  readonly purgeCount: number;

  readonly power: number;

  readonly powerMax: number;

  readonly powerPct: number;

  readonly mana: number;

  readonly manaMax: number;

  readonly manaPct: number;

  readonly rage: number;

  readonly rageMax: number;

  readonly ragePct: number;

  readonly focus: number;

  readonly focusMax: number;

  readonly focusPct: number;

  readonly energy: number;

  readonly energyMax: number;

  readonly energyPct: number;

  readonly comboPoints: number;

  readonly comboPointsMax: number;

  readonly comboPointsPct: number;

  readonly runes: number;

  readonly runesMax: number;

  readonly runesPct: number;

  readonly runicPower: number;

  readonly runicPowerMax: number;

  readonly runicPowerPct: number;

  readonly soulShards: number;

  readonly soulShardsMax: number;

  readonly soulShardsPct: number;

  readonly astralPower: number;

  readonly astralPowerMax: number;

  readonly astralPowerPct: number;

  readonly alternatePower: number;

  readonly alternatePowerMax: number;

  readonly alternatePowerPct: number;

  readonly holyPower: number;

  readonly holyPowerMax: number;

  readonly holyPowerPct: number;

  readonly maelstrom: number;

  readonly maelstromMax: number;

  readonly maelstromPct: number;

  readonly chi: number;

  readonly chiMax: number;

  readonly chiPct: number;

  readonly insanity: number;

  readonly insanityMax: number;

  readonly insanityPct: number;

  readonly arcaneCharges: number;

  readonly arcaneChargesMax: number;

  readonly arcaneChargesPct: number;

  readonly fury: number;

  readonly furyMax: number;

  readonly furyPct: number;

  readonly pain: number;

  readonly painMax: number;

  readonly painPct: number;

  readonly channel: string;

  /**
   * The name of the spell, or nil if no spell is being cast.
   */
  readonly casting?: string;

  /**
   * The string describing the rank of the spell.
   * @example for a rank 1 spell
   *  ```
   * 'Rank 1'
   *  ```
   */
  readonly casting2?: string;

  /**
   * The name of the spell.
   */
  readonly casting3?: string;

  /**
   * The texture path associated with the spell.
   */
  readonly casting4?: string;

  /**
   * Specifies when casting has begun, in milliseconds.
   */
  readonly casting5?: string;

  /**
   * Specifies when casting will end, in milliseconds.
   */
  readonly casting6?: string;

  /**
   *  Specifies if the cast is a tradeskill.
   */
  readonly casting7?: string;

  /**
   * castID.
   */
  readonly casting8: string;

  /**
   * Interrupt.
   */
  readonly casting9?: string;

  readonly castID: number | false;

  readonly castTarget?: AwfulUnit;

  readonly castPct: number;

  readonly castRemains: number;

  readonly castTimeComplete: number;

  readonly castint: boolean;

  /**
   * {@link https://wowpedia.fandom.com/wiki/API_UnitChannelInfo?so=search}
   */
  readonly channeling?: LuaMultiReturn<ChannelInfo>;

  readonly channelID: number | false;

  /**
   * The time remaining on the object's channel, minus latency.
   */
  readonly channelRemains: number;

  /**
   * The end time of the object's channel.
   */
  readonly channelTimeComplete: number;

  /**
   * Distance between the player and the object, accounting for combat reach and bounding radius.
   */
  readonly distance: number;

  /**
   * Distance between the player and the object.
   */
  readonly distanceLiteral: number;

  /**
   * The combat reach of the object.
   */
  readonly combatReach: number;

  /**
   * The bounding radius of the object.
   */
  readonly boundingRadius: number | false;

  /**
   * 180 degrees angle, used for spell cast.
   */
  readonly playerFacing: boolean;

  /**
   * Check if player is facing the unit at given angle.
   */
  [key: `playerFacing${number}`]: boolean;

  /**
   * Checks if the object and player are in line of sight of each other.
   */
  readonly los: boolean;

  /**
   * Checks LoS without accounting for LoS-impairing effects like smoke bomb.
   */
  readonly losLiteral: boolean;

  /**
   * Facing direction (rotation) of the object in radians.
   */
  readonly rotation: number;

  /**
   * Check if player is in melee range of the unit.
   */
  readonly meleeRange: boolean;

  /**
   * Check if the unit is moving.
   */
  readonly moving: boolean;

  /**
   * In radians
   */
  readonly movingDirection: number;

  /**
   * In yards per second
   */
  readonly currentSpeed: number;

  /**
   * In yards per second
   */
  readonly runSpeed: number;

  /**
   * If the object is in breakable crowd control, returns the spellID of that crowd control debuff.
   */
  readonly bcc?: number;

  /**
   * The remaining time of breakable cc effects on the object.
   */
  readonly bccRemains: number;

  /**
   * If the object is in crowd control, returns the spellID of that crowd control debuff.\
   * If there is more than one CC effect active, the one with the longest remaining duration's ID is returned
   */
  readonly cc?: number;

  /**
   * The remaining time of crowd control effects on the object. 0 if there is no CC effect.
   */
  readonly ccRemains: number;

  /**
   * @returns [[id, name, remains, drCat, sourceGUID]]
   */
  readonly ccInfo: CCInfoList;

  /*
   * If the object is currently affected by a disarm, returns the spellID of that effect. Otherwise returns false.
   */
  readonly disarmed: number | false;

  /*
   * If the object is disoriented, returns the spellID of the disorient debuff.
   */
  readonly disorient?: number;

  /*
   * The remaining time of disorient CC effects on the object. 0 if the object is not disoriented.
   */
  readonly disorientRemains: number;

  /**
   * @returns [id, name, remains, drCat, sourceGUID]
   */
  readonly disorientInfo?: CCInfo;

  /*
   * If the object is incapacitated, returns the spellID of the incapacitate debuff.
   */
  readonly incapacitated?: number;

  /*
   * The remaining time of incapacitate CC effects on the object. 0 if the object is not incapacitated.
   */
  readonly incapacitateRemains: number;

  /**
   * @returns [id, name, remains, drCat, sourceGUID]
   */
  readonly incapacitateInfo?: CCInfo;

  /*
   * If the object is slowed, returns the spellID of the slow debuff.
   */
  readonly slowed?: number;

  /*
   * If the object is stunned, returns the spellID of the stun debuff.
   */
  readonly stunned?: number;

  /*
   * The remaining time of stun CC effects on the object. 0 if the object is not stunned.
   */
  readonly stunnedRemains: number;

  /**
   * @returns [id, name, remains, drCat, sourceGUID]
   */
  readonly stunnedInfo?: CCInfo;

  /*
   * If the object is rooted, returns the spellID of the root debuff.
   */
  readonly rooted?: number;

  /*
   * The remaining time of root effects on the object.
   */
  readonly rootRemains: number;

  /**
   * @returns [id, name, remains, drCat, sourceGUID]
   */
  readonly rootInfo?: CCInfo;

  /**
   * If the object is silenced, returns the spellID of the silence debuff.
   */
  readonly silenced?: number;

  /**
   * The remaining time of silence effects on the object.
   */
  readonly silenceRemains: number;

  /**
   * The remaining time of silence effects on the object.\
   * @returns [id, name, remains, drCat, sourceGUID]
   */
  readonly silenceInfo?: CCInfo;

  /**
   * The disorient DR of the object. 0.25 is quarter DR, 0.5 is half DR, 1 is full DR.
   */
  readonly disorientDR: number;

  /**
   * The time remaining before the disorient DR of the object resets.
   */
  readonly disorientDRRemains: number;

  /**
   * The incapacitate DR of the object. 0.25 is quarter DR, 0.5 is half DR, 1 is full DR.
   */
  readonly incapacitateDR: number;

  /**
   * The time remaining before the incapacitate DR of the object resets.
   */
  readonly incapacitateDRRemains: number;

  /**
   * The stun DR of the object. 0.25 is quarter DR, 0.5 is half DR, 1 is full DR.
   */
  readonly stunDR: number;

  /**
   * The time remaining before the stun DR of the object resets.
   */
  readonly stunDRRemains: number;

  /**
   * The root DR of the object. 0.25 is quarter DR, 0.5 is half DR, 1 is full DR.
   */
  readonly rootDR: number;

  /**
   * The time remaining before the root DR of the object resets.
   */
  readonly rootDRRemains: number;

  /**
   * The silence DR of the object. 0.25 is quarter DR, 0.5 is half DR, 1 is full DR.
   */
  readonly silenceDR: number;

  /**
   * The time remaining before the silence DR of the object resets.
   */
  readonly silenceDRRemains: number;

  /**
   * Checks if the unit is currently immune to polymorph effects.
   */
  readonly beast: boolean;

  /**
   * Remaining duration of CC immunity effects on the unit.\
   * Specifically checks for pvp-related buffs/debuffs that make the unit immune to cc (holy ward, bladestorm, fleshcraft, etc.)
   */
  readonly ccImmunityRemains: number;

  /**
   * Remaining duration of healing immunity effects on the unit.\
   * Specifically checks for pvp-related buffs/debuffs that make the unit immune to healing (cyclone, etc.)
   */
  readonly healingImmunityRemains: number;

  /**
   * Checks if the unit is currently immune to crowd control effects.
   */
  readonly immuneCC: boolean;

  /**
   * Checks if the unit is currently immune to healing effects.
   */
  readonly immuneHealing: boolean;

  /**
   * Checks if the unit is currently immune to magic damage or effects.
   */
  readonly immuneMagic: boolean;

  /**
   * Checks if the unit is currently immune to magic damage.
   */
  readonly immuneMagicDamage: boolean;

  /**
   * Checks if the unit is currently immune to magic effects.
   */
  readonly immuneMagicEffects: boolean;

  /**
   * Remaining duration of magic damage immunities
   */
  readonly magicDamageImmunityRemains: number;

  /**
   * Remaining duration of magic effect immunities
   */
  readonly magicEffectImmunityRemains: number;

  /**
   * Checks if the unit is currently immune to physical damage or effects.
   */
  readonly immunePhysical: boolean;

  /**
   * Checks if the unit is currently immune to physical damage.
   */
  readonly immunePhysicalDamage: boolean;

  /**
   * Checks if the unit is currently immune to physical effects.
   */
  readonly immunePhysicalEffects: boolean;

  /**
   * Remaining duration of physical damage immunities.
   */
  readonly physicalDamageImmunityRemains: number;

  /**
   * Remaining duration of physical effect immunities.
   */
  readonly physicalEffectImmunityRemains: number;

  /**
   * Checks if the unit is currently immune to slows / snares.
   */
  readonly immuneSlows: boolean;

  /**
   * Checks if the unit is currently immune to stuns.
   */
  readonly immuneStuns: boolean;

  /**
   * Remaining healing absorption effect of Mindgames
   */
  readonly mgr: number;

  /**
   * Remaining time to die of the unit, based on linear regression algorithm lifted from HeroLib.\
   * Must set awful.ttd_enabled to true for ttd functions / attributes to work.
   */
  readonly ttd: number;

  readonly threat: ThreatStatus | undefined;

  readonly aggro: boolean;

  readonly hpPlusAbsorbs: number;

  readonly hpa: number;

  /**
   * Time the target has been in your los, 0 if out of los
   */
  readonly timeInLoS: number;
}

interface AwfulPlayers extends AwfulUnit {
  /**
   * Time until the unit's next GCD is available (if any).
   */
  readonly gcdRemains: number;

  /**
   * Latest spellID cast by the object.
   */
  readonly lastCast?: number;

  readonly role: AwfulRoles;

  readonly isHealer: boolean;

  readonly isMelee: boolean;

  readonly isRanged: boolean;

  readonly isTank: boolean;

  readonly race: string;

  /**
   * The class of the object.
   */
  readonly class: AwfulClasses;

  /**
   * The class of the object.
   */
  readonly class2: Classes2;

  /**
   * Max Velocity of moving unit.
   */
  readonly speed2: number;

  readonly castingTarget: AwfulPlayers;
}

interface AwfulAlly extends AwfulPlayers {
  readonly spec: AwfulClassSpecs;

  /**
   * Can only be used on players who are in your party and visible
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  readonly inspect: Object;
}

interface AwfulPlayer extends AwfulAlly {
  /**
   * Checks if the player has the given talent or PvP talent selected.
   *
   * @param talent The id or name or nodeId of the talent to check.
   *
   * @returns False if the player doesn't have the talent, or the rank of the talent if the player has it.
   */
  hasTalent(this: void, talent: string | number): false | number;

  hasConduit(this: void, conduitnameOrId: string | number): boolean;

  face(this: void, unitOrdirection?: AwfulUnit | number): void;

  /**
   * Checks to see if x,y,z position is in los of player
   */
  losCoordsLiteral(this: void, position: AwfulPosition): boolean;

  readonly specialization: AwfulClassSpecs;

  readonly mainHandEnchant: boolean;

  readonly offHandEnchant: boolean;

  readonly mounted: boolean;

  readonly timeStandingStill: number;

  readonly falling: boolean;
}
