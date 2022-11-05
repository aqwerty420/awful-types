/** @noSelfInFile **/

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
  this: void,
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

declare const enum BookType {
  spell = 'BOOKTYPE_SPELL',
  pet = 'BOOKTYPE_PET',
}

/**
 *
 * Returns the icon texture of a spell.
 *
 * {@link https://wowpedia.fandom.com/wiki/API_GetSpellTexture}
 *
 * @param spellIdOrName Spell ID or Name. When passing a name requires the spell to be in your Spellbook.
 *
 */
declare function GetSpellTexture(spellIdOrName: number | string): string;

/**
 *
 * Returns the icon texture of a spell.
 *
 * {@link https://wowpedia.fandom.com/wiki/API_GetSpellTexture}
 *
 * @param index Spellbook slot index, ranging from 1 through the total number of spells across all tabs and pages.
 * @param bookType {@link BookType} Depending on if you wish to query the player or pet spellbook. Internally the game only tests if this is equal to "pet" and treats any other string value as "spell".
 *
 */
declare function GetSpellTexture(index: string, bookType: BookType): string;

/**
 *
 * Get information about a spell's Autocast.
 *
 * {@link https://wowpedia.fandom.com/wiki/API_GetSpellAutocast}
 *
 * @param spellNameOrId  Spell ID or Name. When passing a name requires the spell to be in your Spellbook.
 * @param bookType {@link BookType} Depending on if you wish to query the player or pet spellbook. Internally the game only tests if this is equal to "pet" and treats any other string value as "spell".
 */
declare function GetSpellAutocast(
  spellNameOrId: string,
  bookType?: BookType
): LuaMultiReturn<[number, number]>;

/**
 *
 * This toggles the state of the Autocast spell.
 *
 * @param spellNameOrId Spell ID or Name. When passing a name requires the spell to be in your Spellbook.
 * @param bookType {@link BookType} Depending on if you wish to query the player or pet spellbook. Internally the game only tests if this is equal to "pet" and treats any other string value as "spell".
 */
declare function ToggleSpellAutocast(
  spellNameOrId: string,
  bookType?: BookType
): void;

/**
 * True if the player is in range to use the specified spell on the target unit.
 *
 * {@link https://wowpedia.fandom.com/wiki/API_IsSpellInRange}
 *
 * @param spellName Spell name to check the range of. The player must know the spell.
 * @param target UnitId of the target to check the range of.
 */
declare function IsSpellInRange(spellName: string, target: IUnitId): boolean;

/**
 * True if the player is in range to use the specified spell on the target unit.
 *
 * {@link https://wowpedia.fandom.com/wiki/API_IsSpellInRange}
 *
 * @param index Spell book slot index, ascending from 1.
 * @param bookType {@link BookType} specifying which spellbook to index.
 * @param target UnitId of the target to check the range of.
 */
declare function IsSpellInRange(
  index: number,
  bookType: BookType,
  target: IUnitId
): boolean;
