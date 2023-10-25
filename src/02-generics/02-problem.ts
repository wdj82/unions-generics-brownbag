function identity<T>(arg: T) {
  return arg;
}

const result1 = identity(5);
// @ts-expect-error
const result2 = identity("hello");
