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

declare const enum RuneType {
  RUNETYPE_BLOOD = 1,
  RUNETYPE_CHROMATIC = 2,
  RUNETYPE_FROST = 3,
  RUNETYPE_DEATH = 4,
}

/**
 * Gets the type of rune for a given rune ID.
 *
 * {@link https://wowpedia.fandom.com/wiki/API_GetRuneType}
 *
 * @param id The rune's id. A number between 1 and 6 denoting which rune to be queried.
 *
 * @return 0 - runeType - The type of rune that it is.
 */
declare function GetRuneType(id: number): RuneType;

/**
 * Returns the Death Knight's cooldown info for the specified rune.
 *
 * {@link https://wowpedia.fandom.com/wiki/API_GetRuneCooldown}
 *
 * @param id The rune index, ranging between 1 and 6.
 *
 * @return 0 - start - The value of GetTime() when the rune's cooldown began (or 0 if the rune is off cooldown).
 * @return 1 - duration - The duration of the rune's cooldown (regardless of whether or not it's on cooldown).
 * @return 2 - runeReady - Whether or not the rune is off cooldown. True if ready, false if not.
 */
 declare function GetRuneCooldown(
  id: number
): LuaMultiReturn<[number, number, boolean]>;
