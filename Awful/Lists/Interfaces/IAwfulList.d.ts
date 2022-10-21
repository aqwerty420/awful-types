// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
interface IAwfulList<T> extends Array<T> {
  /**
   *
   * @param unitOrPos unit or position to check
   * @param distance maximal distance to check
   * @param criteria optional filter function
   *
   * @returns 1 the number of units around who met the criteria (if any)
   * @returns 2 the total number of units around, even if they did not meet the criteria.
   * @returns 3 the list of units around who met the criteria (if any)
   */
  around(
    this: void,
    unitOrPos: AwfulUnitOrPosition,
    distance: number,
    criteria?: AwfulListFilter<T>
  ): AwfulListReturn<T>;
  filter(this: void, criteria: AwfulListFilter<T>): Array<T>;
  loop(this: void, callback: AwfulListLoopCallback<T>): void;
  stomp(this: void, callback: AwfulListStompCallback<T>): void;
  sort(this: void, criteria: AwfulListSortFilter<T>): void;
}
