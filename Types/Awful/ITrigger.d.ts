interface ITrigger {
  this: void;
  position(this: void): AwfulPosition;
  enemy: boolean;
  id: number;
}
