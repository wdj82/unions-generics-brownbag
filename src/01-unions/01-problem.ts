type Colorful = { color: string };
type Circle = { radius: number };

// an intersection of types
type ColorfulCircle = Colorful & Circle;

// a union of types
type SimpleUnion = "a" | "b" | "c";

type State = {
  status: "loading" | "success" | "error";
  data?: string[];
  error?: Error;
};

// @ts-expect-error
const example: State = {
  status: "success",
  // where's data?
};

const example2: State = {
  status: "loading",
  // @ts-expect-error
  error: new Error("whaaaa?"),
};
