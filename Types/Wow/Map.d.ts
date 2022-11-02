/** @noSelfInFile **/

/**
 * Returns info for the map instance teh character is currently in.
 *
 * {@link https://wowpedia.fandom.com/wiki/API_GetInstanceInfo}
 *
 * @return 0 - name - The localized name of the instance—otherwise, the continent name (e.g., Eastern Kingdoms, Kalimdor, Outland, Northrend, Pandaria).
 * @return 1 - "none" if the player is not in an instance, "scenario" for scenarios, "party" for dungeons, "raid" for raids, "arena" for arenas, and "pvp" for battlegrounds. Many of the following return values will be nil or otherwise useless in the case of "none".
 * @return 2 - difficultyID - The DifficultyID of the instance. Will return 0 while not in an instance.
 * @return 3 - difficultyName - The localized name for the instance's difficulty ("10 Player", "25 Player (Heroic)", etc.).
 * @return 4 - maxPlayers - Maximum number of players permitted within the instance at the same time.
 * @return 5 - dynamicDifficulty - The difficulty of dynamic enabled instances. This no longer appears to be used.
 * @return 6 - isDynamic - If the instance difficulty can be changed while zoned in. This is true for most raids after and including Icecrown Citadel.
 * @return 7 - instanceID - The InstanceID for the instance or continent.
 * @return 8 - instanceGroupSize - The number of players within your instance group.
 * @return 9 - LfgDungeonID - The LfgDungeonID for the current instance group, nil if not in a dungeon finder group.
 */
declare function GetInstanceInfo(): LuaMultiReturn<
  [
    string,
    string,
    number,
    string,
    number,
    number,
    boolean,
    number,
    number,
    number
  ]
>;
