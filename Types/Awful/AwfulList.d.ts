type AwfulListFilter<T> = (this: void, unit: T) => boolean;

type AwfulListLoopCallback<T> = (
  this: void,
  unit: T,
  index: number,
  uptime: number
) => void;

type AwfulListReturn<T> = LuaMultiReturn<[number, number, IAwfulList<T>]>;

type AwfulListSortFilter<T> = (this: void, a: T, b: T) => boolean;

type AwfulListStompCallback<T> = (this: void, unit: T, uptime: number) => void;

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
    unitOrPos: IAwfulUnit | AwfulPosition,
    distance: number,
    criteria?: AwfulListFilter<T>
  ): AwfulListReturn<T>;

  /**
   *
   * @param criteria {@link AwfulListFilter} filter function
   *
   * @returns An {@link IAwfulList} of filtered units.
   */
  filter(this: void, criteria: AwfulListFilter<T>): IAwfulList<T>;

  /**
   * Iterate over each unit in the list.
   *
   * @param callback {@link AwfulListLoopCallback} callback for each unit
   *
   */
  loop(this: void, callback: AwfulListLoopCallback<T>): void;

  stomp(this: void, callback: AwfulListStompCallback<T>): void;

  sort(this: void, criteria: AwfulListSortFilter<T>): IAwfulList<T>;

  /**
   * Filter the units in the list by the distance specified.
   *
   * @param range Maximum distance to the unit
   *
   * @returns An {@link IAwfulList} of filtered units.
   */
  within(this: void, range: number): IAwfulList<T>;

  /**
   * @returns 0 - bestAngle
   * @returns 1 - bestCount
   */
  arcAngle(
    this: void,
    r: number,
    a: number,
    steps: number,
    criteria: AwfulListSortFilter<T>,
    unit: IAwfulUnit
  ): LuaMultiReturn<[number, number]>;
}
