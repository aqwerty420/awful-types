/** @noSelfInFile **/

declare namespace C_QuestLog {
  /**
   * Returns whether the supplied quest in the quest log is complete
   *
   * {@link https://wowpedia.fandom.com/wiki/API_C_QuestLog.IsComplete}
   *
   * @param questId - The quest's Identifier
   *
   * @returns isComplete - Whether the quest is both in the quest log and is complete
   */
  function IsComplete(questId: number): boolean;

  /**
   * Returns true if the specified quest has been failed
   *
   * {@link https://wowpedia.fandom.com/wiki/API_C_QuestLog.IsFailed}
   *
   * @param questId - The quest's Identifier
   *
   * @returns isFailed - Returns true if failed
   */
  function IsFailed(questId: number): boolean;

  /**
   * Returns if a quest has been completed
   *
   * {@link https://wowpedia.fandom.com/wiki/API_C_QuestLog.IsQuestFlaggedCompleted}
   *
   * @param questId - The quest's Identifier
   *
   * @returns isCompleted - Returns true if completed; returns false if not completed or if the questID is invalid
   */
  function IsQuestFlaggedCompleted(questId: number): boolean;

  /**
   * Only returns a questID for actual quests, not headers
   *
   * {@link https://wowpedia.fandom.com/wiki/API_C_QuestLog.GetQuestIDForLogIndex}
   *
   * @param questLogIndex - The quest's Index in the Quest Log
   *
   * @returns questID - The quest's Identifier
   */
  function GetQuestIDForLogIndex(questLogIndex: number): number;
}

/**
 * Returns the number of entries in the quest log
 *
 * {@link https://wowpedia.fandom.com/wiki/API_GetNumQuestLogEntries}
 *
 * @returns 0 - numEntries - Number of entries in the Quest Log, including collapsable zone headers
 * @returns 1 - numQuests - Number of actual quests in the Quest Log, not counting zone headers
 */
export function GetNumQuestLogEntries(): LuaMultiReturn<[number, number]>;
