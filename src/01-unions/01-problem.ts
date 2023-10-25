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
