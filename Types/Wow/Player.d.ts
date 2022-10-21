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
