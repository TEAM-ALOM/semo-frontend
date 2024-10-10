export interface Store<T> {
  get: () => T;
  set: (value: T) => void;
}
