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
