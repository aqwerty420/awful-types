/**
 * Returns information about the charges of a charge-accumulating player ability
 *
 * {@link https://wowpedia.fandom.com/wiki/API_GetSpellCharges}
 *
 * @param spellIdOrName Spell ID or Name. When passing a name requires the spell to be in your Spellbook
 *
 * @return 0 - currentCharges - The number of charges of the ability currently available
 * @return 1 - maxCharges - The maximum number of charges the ability may have available
 * @return 2 - cooldownStart - Time {@link GetTime()} at which the last charge cooldown began, or 2^32 / 1000 - cooldownDuration if the spell is not currently recharging.
 * @return 3 - cooldownDuration - Time (in seconds) required to gain a charge
 * @return 4 - chargeModRate - The rate at which the charge cooldown widget's animation should be updated
 */
declare function GetSpellCharges(
  spellIdOrName: number | string
): LuaMultiReturn<[number, number, number, number, number]>;

/**
 * Returns spell info
 *
 * {@link https://wowpedia.fandom.com/wiki/API_GetSpellInfo}
 *
 * @param spellIdOrName Spell ID or Name. When passing a name requires the spell to be in your Spellbook
 *
 * @return 0 - name - The localized name of the spell
 * @return 1 - rank - Always returns nil. Refer to GetSpellSubtext() for retrieving the rank of spells on Classic
 * @return 2 - icon - The spell icon texture
 * @return 3 - castTime - Cast time in milliseconds, or 0 for instant spells
 * @return 4 - minRange - Minimum range of the spell, or 0 if not applicable
 * @return 5 - maxRange - Maximum range of the spell, or 0 if not applicable
 * @return 6 - spellID - The ID of the spell
 * @return 7 - originalIcon - The original icon texture for this spell
 */
declare function GetSpellInfo(
  spellIdOrName: number | string
): LuaMultiReturn<
  [string, string, number, number, number, number, number, number]
>;
