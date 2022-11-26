/** @noSelfInFile **/

/**
 * True if the unit is in combat
 *
 * {@link https://wowpedia.fandom.com/wiki/API_UnitAffectingCombat}
 *
 * @param unitId The unit's Identifier to be queried
 */
declare function UnitAffectingCombat(unitId: IUnitId): boolean;

/**
 * Returns the GUID of the unit
 *
 * {@link https://wowpedia.fandom.com/wiki/API_UnitGUID}
 *
 * @param unitId The unit's Identifier to be queried
 */
declare function UnitGUID(unitId: IUnitId): IGuid;

/**
 * Indicates a mob is no longer eligible for tap
 *
 * {@link https://wowpedia.fandom.com/wiki/API_UnitIsTapDenied}
 *
 * @param unitId The unit's Identifier to be queried
 */
declare function UnitIsTapDenied(unitId: IUnitId): boolean;

declare const enum CreatureType {
  beast = 'Beast',
  dragonkin = 'Dragonkin',
  demon = 'Demon',
  elemental = 'Elemental',
  giant = 'Giant',
  undead = 'Undead',
  humanoid = 'Humanoid',
  critter = 'Critter',
  mechanical = 'Mechanical',
  notSpecified = 'Not specified',
  totem = 'Totem',
  nonCombatPet = 'Non-combat Pet',
  gasCloud = 'Gas Cloud',
}

/**
 * Returns the creature classification type of the unit
 *
 * {@link https://wowpedia.fandom.com/wiki/API_UnitCreatureType}
 *
 * @param unitId The unit's Identifier to be queried
 */
declare function UnitCreatureType(unitId: IUnitId): CreatureType;

/**
 * True if the specified units are the same unit
 *
 * {@link https://wowpedia.fandom.com/wiki/API_UnitIsUnit}
 */
declare function UnitIsUnit(
  firstUnitId: IUnitId,
  secondUnitId: IUnitId
): boolean;

/**
 * True if the specified units are the same unit
 *
 * {@link https://wowpedia.fandom.com/wiki/API_UnitIsUnit}
 */
declare function UnitExists(UnitId: IUnitId): boolean;

declare const enum Classes2 {
  warrior = 'WARRIOR',
  paladin = 'PALADIN',
  hunter = 'HUNTER',
  rogue = 'ROGUE',
  priest = 'PRIEST',
  deathKnight = 'DEATHKNIGHT',
  shaman = 'SHAMAN',
  mage = 'MAGE',
  warlock = 'WARLOCK',
  monk = 'MONK',
  druid = 'DRUID',
  demonHunter = 'DEMONHUNTER',
  evoker = 'EVOKER',
}

declare const enum ClassesId {
  warrior = 1,
  paladin = 2,
  hunter = 3,
  rogue = 4,
  priest = 5,
  deathKnight = 6,
  shaman = 7,
  mage = 8,
  warlock = 9,
  monk = 10,
  druid = 11,
  demonHunter = 12,
  evoker = 13,
}

/**
 * Returns the class of the unit
 *
 * {@link https://wowpedia.fandom.com/wiki/API_UnitClass}
 *
 * @param unitId The unit's Identifier to be queried
 *
 * @return 0 - className - Localized name, e.g. "Warrior" or "Guerrier" for french
 * @return 1 - classFilename - Locale-independent name {@link Classes2}
 * @return 2 - classId - Numeric identifier, e.g. 1 for Warrior
 */
declare function UnitClass(
  unitId: IUnitId
): LuaMultiReturn<[string, Classes2, ClassesId]>;

declare const enum Races2 {
  human = 'Human',
  orc = 'Orc',
  dwarf = 'Dwarf',
  nightElf = 'NightElf',
  undead = 'Scourge',
  tauren = 'Tauren',
  gnome = 'Gnome',
  troll = 'Troll',
  golbin = 'Goblin',
  bloodElf = 'BloodElf',
  draenei = 'Draenei',
  felOrc = 'FelOrc',
  naga = 'Naga',
  broken = 'Broken',
  skeleton = 'Skeleton',
  vrykul = 'Vrykul',
  tuskar = 'Tuskar',
  forestTroll = 'ForestTroll',
  taunka = 'Taunka',
  northrendSkeleton = 'NorthrendSkeleton',
  iceTroll = 'IceTroll',
  worgen = 'Worgen',
  gilnean = 'Gilnean',
  pandaren = 'Pandaren',
  nightborne = 'Nightborne',
  highmountainTauren = 'HighmountainTauren',
  voidElf = 'VoidElf',
  lightforgedDraenei = 'LightforgedDraenei',
  zandalariTroll = 'ZandalariTroll',
  kulTiran = 'KulTiran',
  thinHuman = 'ThinHuman',
  darkIronDwarf = 'DarkIronDwarf',
  vulpera = 'Vulpera',
  magharOrc = 'MagharOrc',
  mechagnome = 'Mechagnome',
  dracthyr = 'Dracthyr',
}

/**
 * Returns the race of the unit
 *
 * {@link https://wowpedia.fandom.com/wiki/API_UnitRace}
 *
 * @param unitId The unit's Identifier to be queried
 *
 * @return 0 - raceName - Localized race name, suitable for use in user interfaces
 * @return 1 - raceFile - Localization-independent race name, suitable for use as table keys {@link Races2}
 * @return 2 - raceID - Localization-independent raceID
 */
declare function UnitRace(
  unitId: IUnitId
): LuaMultiReturn<[string, Races2, number]>;

/**
 * Returns the current spell haste percentage for a unit
 *
 * {@link https://wowpedia.fandom.com/wiki/API_UnitSpellHaste}
 *
 * @param unitId The unit's Identifier to be queried
 */
declare function UnitSpellHaste(unitId: IUnitId): number;

/**
 * Get current Power Regeneration
 *
 * @param unitId The unit's Identifier to be queried
 *
 * @return 0 - base
 * @return 1 - combat
 */
declare function GetPowerRegen(
  unitId: IUnitId
): LuaMultiReturn<[number, number]>;

declare const enum DispelType {
  Curse = 'Curse',
  Disease = 'Disease',
  Magic = 'Magic',
  Poison = 'Poison',
  Enrage = '',
}

/**
 * {@link https://wowpedia.fandom.com/wiki/API_UnitAura}
 *
 * @return 0 - name - The localized name of the aura, otherwise nil if there is no aura for the index
 * @return 1 - icon - The icon texture
 * @return 2 - count - The amount of stacks, otherwise 0
 * @return 3 - dispelType - The locale-independent magic type of the aura, otherwise nil
 * @return 4 - duration - The full duration of the aura in seconds
 * @return 5 - expirationTime - Time the aura expires compared to {@link GetTime()}
 * @return 6 - source - The unit that applied the aura
 * @return 7 - isStealable - If the aura may be stolen
 * @return 8 - nameplateShowPersonal - If the aura should be shown on the player/pet/vehicle nameplate
 * @return 9 - spellId - The spell ID of the aura
 * @return 10 - canApplyAura - If the player can apply the aura
 * @return 11 - isBossDebuff - If the aura was cast by a boss
 * @return 12 - castByPlayer - If the aura was applied by a player
 * @return 13 - nameplateShowAll - If the aura should be shown on nameplates
 * @return 14 - timeMod - The scaling factor used for displaying time left
 */
type Aura = [
  string,
  number,
  number,
  DispelType | undefined,
  number,
  number,
  IUnitId,
  boolean,
  boolean,
  number,
  boolean,
  boolean,
  boolean,
  boolean,
  number
];

/**
 * Returns the buffs/debuffs for the unit
 *
 * {@link https://wowpedia.fandom.com/wiki/API_UnitAura}
 *
 * @param unitId The unit's Identifier to be queried
 * @param index The index of the aura to be queried
 * @param filter A list of filters, separated by pipe chars or spaces. Otherwise defaults to "HELPFUL"
 *
 * @return 0 - name - The localized name of the aura, otherwise nil if there is no aura for the index
 * @return 1 - icon - The icon texture
 * @return 2 - count - The amount of stacks, otherwise 0
 * @return 3 - dispelType - The locale-independent magic type of the aura, otherwise nil
 * @return 4 - duration - The full duration of the aura in seconds
 * @return 5 - expirationTime - Time the aura expires compared to {@link GetTime()}
 * @return 6 - source - The unit that applied the aura
 * @return 7 - isStealable - If the aura may be stolen
 * @return 8 - nameplateShowPersonal - If the aura should be shown on the player/pet/vehicle nameplate
 * @return 9 - spellId - The spell ID of the aura
 * @return 10 - canApplyAura - If the player can apply the aura
 * @return 11 - isBossDebuff - If the aura was cast by a boss
 * @return 12 - castByPlayer - If the aura was applied by a player
 * @return 13 - nameplateShowAll - If the aura should be shown on nameplates
 * @return 14 - timeMod - The scaling factor used for displaying time left
 */
declare function UnitAura(
  unitId: IUnitId,
  index: number,
  filter?: string
): LuaMultiReturn<Aura>;

/**
 *
 * {@link https://wowpedia.fandom.com/wiki/API_UnitChannelInfo}
 *
 * @return 0 - name - The localized name of the aura, otherwise nil if there is no aura for the index
 * @return 1 - text - The name to be displayed
 * @return 2 - texture - The texture path associated with the spell icon
 * @return 3 - startTimeMS - Specifies when channeling began, in milliseconds (corresponds to {@link GetTime()}*1000)
 * @return 4 - endTimeMS - Specifies when channeling will end, in in milliseconds (corresponds to {@link GetTime()}*1000)
 * @return 5 - isTradeSkill - Specifies if the cast is a tradeskill
 * @return 6 - notInterruptible - If true, indicates that this channeling cannot be interrupted with abilities like kick (those spells have shield frame around their icons)
 * @return 7 - spellId - The spell's unique identifier
 */
type ChannelInfo = [
  string | undefined,
  string,
  string,
  number,
  number,
  boolean,
  boolean,
  number
];

/**
 * Returns information about the spell currently being channeled by the specified unit
 *
 * {@link https://wowpedia.fandom.com/wiki/API_UnitChannelInfo}
 *
 * @param unitId The unit's Identifier to be queried
 *
 * @return 0 - name - The localized name of the aura, otherwise nil if there is no aura for the index
 * @return 1 - text - The name to be displayed
 * @return 2 - texture - The texture path associated with the spell icon
 * @return 3 - startTimeMS - Specifies when channeling began, in milliseconds (corresponds to {@link GetTime()}*1000)
 * @return 4 - endTimeMS - Specifies when channeling will end, in in milliseconds (corresponds to {@link GetTime()}*1000)
 * @return 5 - isTradeSkill - Specifies if the cast is a tradeskill
 * @return 6 - notInterruptible - If true, indicates that this channeling cannot be interrupted with abilities like kick (those spells have shield frame around their icons)
 * @return 7 - spellId - The spell's unique identifier
 */
declare function UnitChannelInfo(unitId: IUnitId): LuaMultiReturn<ChannelInfo>;

/**
 * Returns detailed info for the threat status of one unit against another. 
 *
 * {@link https://wowpedia.fandom.com/wiki/API_UnitDetailedThreatSituation}
 *
 * @param unitId The unit's Identifier to be queried
 * 
 * @return 0 - isTanking - Returns true if the unit is the primary threat target of the mobUnit, returns false otherwise.
 * @return 1 - status - Threat status of the unit on the mobUnit.
 * @return 2 - scaledPercentage - The unit's threat percentage against mobUnit. At 100% the unit will become the primary target. This value is also scaled the closer the unit is to the mobUnit.
 * @return 3 - rawPercentage - The unit's threat percentage against mobUnit relative to the threat of mobUnit's primary target. Can be greater than 100, up to 255. Stops updating when you become the primary target.
 * @return 4 - threatValue - The unit's total threat value on the mobUnit.
 */
 declare function UnitDetailedThreatSituation(
  this: void,
  unitId: IUnitId,
  otherUnit: IUnitId
): LuaMultiReturn<
  [
    boolean,
    number | undefined,
    number,
    number,
    number
  ]
> | undefined;

declare function UnitPower(unitId: IUnitId, powerType: number): number;
