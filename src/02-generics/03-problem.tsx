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

export function ShowAdmin({ data }: { data: unknown[] }) {
  return <div>{data.map((person) => person.admin)}</div>;
}

export function Test() {
  return <ShowAdmin data={dummyData} />;
}
