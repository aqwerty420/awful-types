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
