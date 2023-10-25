// a discriminated union
// the status field is the discriminator
type State =
  | {
      status: "loading";
    }
  | {
      status: "success";
      data: string[];
    }
  | {
      status: "error";
      error: Error;
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
