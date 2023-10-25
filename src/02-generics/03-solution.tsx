const dummyData = [
  {
    id: "0",
    firstName: "William",
    isAdmin: true,
  },
  {
    id: "1",
    firstName: "Austin",
    isAdmin: false,
  },
];

interface Props<T> {
  data: T[];
}

export function ShowAdmin<T extends { isAdmin: boolean }>({ data }: Props<T>) {
  return <div>{data.map((person) => person.isAdmin)}</div>;
}

export function Test() {
  return <ShowAdmin data={dummyData} />;
}
