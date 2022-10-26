/** @noSelfInFile **/

/**
 * Returns cooldown info for an item ID
 *
 * {@link https://wowpedia.fandom.com/wiki/API_GetItemCooldown}
 *
 * @param itemId The item's Identifier to be queried
 *
 * @return 0 - startTime - The time when the cooldown started (as returned by {@link GetTime()}) or zero if no cooldown
 * @return 1 - duration - The number of seconds the cooldown will last, or zero if no cooldown
 * @return 2 - enable - True if the item is ready or on cooldown, False if the item is used, but the cooldown didn't start yet (e.g. potion in combat)
 */
declare function GetItemCooldown(
  itemId: number
): LuaMultiReturn<[number, number, number]>;

/**
 * Get cooldown information for an inventory item
 *
 * {@link https://wowpedia.fandom.com/wiki/API_GetInventoryItemCooldown}
 *
 * @param unitId The unit's Identifier to be queried
 * @param slotId The slot's Identifier to be queried
 *
 * @return 0 - start - The start time of the cooldown period, or 0 if there is no cooldown (or no item in the slot)
 * @return 1 - duration - The duration of the cooldown period (NOT the remaining time). 0 if the item has no use/cooldown or the slot is empty
 * @return 2 - enable - True if the inventory item is capable of having a cooldown, False if not.
 */
declare function GetInventoryItemCooldown(
  unitId: IUnitId,
  slotId: number
): LuaMultiReturn<[number, number, number]>;

/**
 * Get the Item Id for a specific inventory slot
 *
 * {@link https://wowpedia.fandom.com/wiki/API_GetInventoryItemID}
 *
 * @param unitId The unit's Identifier to be queried
 * @param slotId The slot's Identifier to be queried
 *
 * @return itemId - Item id of the item in the inventory slot; nil if there is no item
 */
declare function GetInventoryItemID(unitId: string, slotId: number): number;

declare const enum InvSlotName {
  ammoSlot = 'AMMOSLOT',
  backSlot = 'BACKSLOT',
  chestSlot = 'CHESTSLOT',
  feetSlot = 'FEETSLOT',
  finger0Slot = 'FINGER0SLOT',
  finger1Slot = 'FINGER1SLOT',
  handsSlot = 'HANDSSLOT',
  headSlot = 'HEADSLOT',
  legsSlot = 'LEGSSLOT',
  mainHandSlot = 'MAINHANDSLOT',
  neckSlot = 'NECKSLOT',
  rangedSlot = 'RANGEDSLOT',
  secondaryHandSlot = 'SECONDARYHANDSLOT',
  shirtSlot = 'SHIRTSLOT',
  shouldersSlot = 'SHOULDERSSLOT',
  tabardSlot = 'TABARDSLOT',
  trinket0Slot = 'TRINKET0SLOT',
  trinket1Slot = 'TRINKET1SLOT',
  waistSlot = 'WAISTSLOT',
  wristSlot = 'WRISTSLOT',
}

declare const INVSLOT_AMMO: number;
declare const INVSLOT_HEAD: number;
declare const INVSLOT_NECK: number;
declare const INVSLOT_SHOULDER: number;
declare const INVSLOT_BODY: number;
declare const INVSLOT_CHEST: number;
declare const INVSLOT_WAIST: number;
declare const INVSLOT_LEGS: number;
declare const INVSLOT_FEET: number;
declare const INVSLOT_WRIST: number;
declare const INVSLOT_HAND: number;
declare const INVSLOT_FINGER1: number;
declare const INVSLOT_FINGER2: number;
declare const INVSLOT_TRINKET1: number;
declare const INVSLOT_TRINKET2: number;
declare const INVSLOT_BACK: number;
declare const INVSLOT_MAINHAND: number;
declare const INVSLOT_OFFHAND: number;
declare const INVSLOT_RANGED: number;
declare const INVSLOT_TABARD: number;

declare const enum InvSlotId {
  ammoSlot = 0,
  headSlot = 1,
  neckSlot = 2,
  shoulderSlot = 3,
  shirtSlot = 4,
  chestSlot = 5,
  waistSlot = 6,
  legsSlot = 7,
  feetSlot = 8,
  wristSlot = 9,
  handsSlot = 10,
  finger0Slot = 11,
  finger1Slot = 12,
  trinket0Slot = 13,
  trinket1Slot = 14,
  backSlot = 15,
  mainHandSlot = 16,
  secondaryHandSlot = 17,
  rangedSlot = 18,
  tabardSlot = 19,
}

/**
 * Returns info for an equipment slot
 *
 * {@link https://wowpedia.fandom.com/wiki/API_GetInventorySlotInfo}
 *
 * @param invSlotName The {@link InvSlotName} to be queried
 *
 * @return 0 - invSlotId - The {@link InvSlotId} to use to refer to that slot in the other GetInventory functions
 * @return 1 - textureName - The texture to use for the empty slot on the paper doll display
 * @return 2 - checkRelic - True if the slot is a relic slot
 */
declare function GetInventorySlotInfo(
  invSlotName: InvSlotName
): LuaMultiReturn<[InvSlotId, string, boolean]>;

/**
 * Returns the item link for an equipped item
 *
 * {@link https://wowpedia.fandom.com/wiki/API_GetInventoryItemLink}
 *
 * @param unitId The unit's Identifier to be queried
 * @param invSlotId The {@link InvSlotId} to be queried
 */
declare function GetInventoryItemLink(
  unitId: IUnitId,
  invSlotId: InvSlotId
): string | undefined;

/**
 * Returns the number (or available charges) of an item in the inventory
 *
 * {@link https://wowpedia.fandom.com/wiki/API_GetItemCount}
 *
 * @param itemInfo Item ID, Link or Name
 * @param includeBank If true, includes the bank
 * @param includeUses If true, includes each charge of an item similar to GetActionCount()
 * @param includeReagentBank If true, includes the reagent bank
 */
declare function GetItemCount(
  itemInfo: number | string,
  includeBank?: boolean,
  includeUses?: boolean,
  includeReagentBank?: boolean
): number;

/**
 * Returns the number (or available charges) of an item in the inventory
 *
 * {@link https://wowpedia.fandom.com/wiki/API_GetItemInfo}
 *
 * @param itemIdOrNameOrLink Item ID, Link or Name
 *
 * @return 0 - itemName - The localized name of the item
 * @return 1 - itemLink - The localized link of the item
 * @return 2 - itemQuality - The quality of the item, e.g. 2 for Uncommon and 3 for Rare quality items
 * @return 3 - itemLevel - The base item level, not including upgrades. See GetDetailedItemLevelInfo() for getting the actual item level
 * @return 4 - itemMinLevel - The minimum level required to use the item, or 0 if there is no level requirement
 * @return 5 - itemType - The localized type name of the item: Armor, Weapon, Quest, etc
 * @return 6 - itemSubType - The localized sub-type name of the item: Bows, Guns, Staves, etc
 * @return 7 - itemStackCount -  The max amount of an item per stack, e.g. 200 for Runecloth
 * @return 8 - itemEquipLoc - The inventory equipment location in which the item may be equipped e.g. "INVTYPE_HEAD", or an empty string if it cannot be equipped
 * @return 9 - itemTexture - The texture for the item icon
 * @return 10 - sellPrice - The vendor price in copper, or 0 for items that cannot be sold
 * @return 11 - classID - The numeric ID of itemType
 * @return 12 - subclassID - he numeric ID of itemSubType
 * @return 13 - bindType - When the item becomes soulbound, e.g. 1 for Bind on Pickup items
 * @return 14 - expacID - The related Expansion, e.g. 8 for Shadowlands
 * @return 15 - setID -  For example 761 for  [Red Winter Hat]
 * @return 16 - isCraftingReagent - Whether the item can be used as a crafting reagent
 */
declare function GetItemInfo(
  itemIdOrNameOrLink: number | string
): LuaMultiReturn<
  [
    string,
    string,
    number,
    number,
    number,
    string,
    string,
    number,
    string,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    boolean
  ]
>;

/**
 * Use an item in a specific inventory slot
 *
 * {@link https://wowpedia.fandom.com/wiki/API_UseInventoryItem}
 *
 * @param slotId The inventory slot ID
 */
declare function UseInventoryItem(slotId: number): void;

/**
 * Use an item in a specific inventory slot
 *
 * {@link https://wowpedia.fandom.com/wiki/API_UseItemByName}
 *
 * @param itemName Name of the item to use
 * @param unitId The unit to use the item on, defaults to "target" for items that can be used on others
 */
declare function UseItemByName(itemName: string, unitId?: IUnitId): void;

declare function IsUsableItem(id: number): LuaMultiReturn<[boolean, boolean]>;
