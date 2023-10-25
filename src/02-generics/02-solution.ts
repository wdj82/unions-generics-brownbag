function identity<T extends number>(arg: T) {
  return arg;
}

const result1 = identity(5);
// @ts-expect-error
const string = identity("hello");
