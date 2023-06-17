/** @noSelfInFile **/

/**
 * Returns info for an action on the pet action bar
 *
 * {@link https://wowpedia.fandom.com/wiki/API_GetPetActionInfo}
 *
 * @return 0 - name
 * @return 1 - subtext
 * @return 2 - texture
 * @return 3 - isToken
 * @return 4 - isActive
 * @return 5 - autoCastAllowed
 * @return 6 - autoCastEnabled
 */
declare function GetPetActionInfo(
  actionSlot: number
): LuaMultiReturn<[string, string, string, boolean, boolean, boolean]>;

declare const NUM_PET_ACTION_SLOTS: number;

declare const enum PetMode {
  assist = 'PET_MODE_ASSIST',
  defensive = 'PET_MODE_DEFENSIVEASSIST',
  passive = 'PET_MODE_PASSIVE',
}

/**
 * Instruct your pet to attack your target
 *
 * {@link https://wowpedia.fandom.com/wiki/API_PetAttack}
 */
declare function PetAttack(): void;

/**
 * Instruct your pet to follow you.
 * {@link https://wowpedia.fandom.com/wiki/API_PetFollow}
 */
declare function PetFollow(): void;
