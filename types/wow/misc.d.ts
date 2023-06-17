/** @noSelfInFile **/

/**
 * World of Warcraft Retail
 */
declare const WOW_PROJECT_MAINLINE: number;

/**
 * World of Warcraft Classic
 */
declare const WOW_PROJECT_CLASSIC: number;

/**
 * Burning Crusade Classic
 */
declare const WOW_PROJECT_BURNING_CRUSADE_CLASSIC: number;

/**
 * Wrath of the Lich King Classic
 */
declare const WOW_PROJECT_WRATH_CLASSIC: number;

/**
 * World of Warcraft current project ID
 */
declare const WOW_PROJECT_ID: number;

/**
 * GUIDs are intended to provide a unique way to identify units
 */
type IGuid = string;

/**
 * Identifies a unit by their relationship to the player
 *
 * {@link https://wowpedia.fandom.com/wiki/UnitId}
 */
type IUnitId = string;

/**
 * Hyperlinks are clickable (chat) links
 *
 * {@link https://wowpedia.fandom.com/wiki/Hyperlinks}
 */
type HyperLink = string;

/**
 * Returns the system uptime of your computer in seconds, with millisecond precision
 *
 * {@link https://wowpedia.fandom.com/wiki/API_GetTime}
 */
declare function GetTime(): number;

/**
 * @param  options secure command options string to be parsed, e.g. "[mod:alt] ALT is held down; [mod:ctrl] CTRL is held down, but ALT is not; neither ALT nor CTRL is held down".
 *
 * @return 0 - result - value of the first satisfied clause in options,
 * or no return (nil) if none of the conditions in options are satisfied.
 * @return 1 - target - the target of the first satisfied clause in options
 *  (using either the target=... or \@... conditional), nil if the clause does
 *  not explicitly specify a target, or no return (nil) if none of the conditions
 *  in options are satisfied.
 *
 * {@link https://wowpedia.fandom.com/wiki/API_SecureCmdOptionParse}
 */
declare function SecureCmdOptionParse(
  options: string
): LuaMultiReturn<[string, string]>;
