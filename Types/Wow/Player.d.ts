/** @noSelfInFile **/

/**
 * Targets the specified unit
 *
 * {@link https://wowpedia.fandom.com/wiki/API_TargetUnit}
 *
 * @param unitIdOrName The unit's Identifier or Name to be queried
 * @param exactMatch To check only units whose name exactly matches the name given
 */
declare function TargetUnit(
  unitIdOrName: IUnitId | string,
  exactMatch?: boolean
): void;

/**
 * Turns on auto-attack and engages a target
 */
declare function StartAttack(): void;

/**
 * Toggles auto-attacking of the current target
 *
 * {@link https://wowpedia.fandom.com/wiki/API_AttackTarget}
 */
declare function AttackTarget(): void;

/**
 * Cancel Unit Buff - Must be under player control
 * {@link https://wowpedia.fandom.com/wiki/API_CancelUnitBuff}
 * @param unit UnitId - The unit to cancel the buff from, must be under the player's control.
 * @param buffIndex index of the buff to cancel, ascending from 1.
 */

declare function CancelUnitBuff(unit: string, buffIndex: string): void;

/**
 * Returns information on a glyph socket.
 *
 * {@link https://wowpedia.fandom.com/wiki/API_GetGlyphSocketInfo}
 *
 * @param socketId The socket index to query, ranging from 1 through NUM_GLYPH_SLOTS.
 * @param talentGroup Optional, ranging from 1 (primary) to 2 (secondary) the talent group to query. Defaults to the currently active talent group.
 *
 * @return 0 - enabled - True if the socket has a glyph inserted.
 * @return 1 - glyphType - The type of glyph accepted by this socket. Either GLYPHTYPE_MAJOR or GLYPHTYPE_MINOR.
 * @return 2 - glyphSpellID - The spell ID of the socketed glyph.
 * @return 3 - iconFile - The file ID of the sigil icon associated with the socketed glyph.
 */
 declare function GetGlyphSocketInfo(
  socketId: number,
  talentGroup?: number
): LuaMultiReturn<[boolean, number, number?, number?]>;
