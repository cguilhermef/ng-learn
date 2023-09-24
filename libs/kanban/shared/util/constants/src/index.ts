export interface Squad {
  id: string;
  name: string;
}

export const Squads = function () {
  const squads = [
    { id: 'golf', name: 'Golf' },
    { id: 'hotel', name: 'Hotel' },
    { id: 'india', name: 'India' },
    { id: 'juliett', name: 'Juliett' },
    { id: 'kilo', name: 'Kilo' },
  ];

  return {
    list: () => squads,
    byId: (id: string) =>
      squads.find(({ id: squadId }) => squadId === id) || null,
    byName: (name: string) =>
      squads.find(({ name: squadId }) => squadId === name) || null,
    byIndex: (index: number) => squads[index % squads.length],
  };
};

export const Users = function () {
  const users = [
    { id: 'han', name: 'Han Solo' },
    { id: 'chewbacca', name: 'Chewbacca' },
  ];

  return {
    list: () => users,
    byId: (id: string) =>
      users.find(({ id: squadId }) => squadId === id) || null,
    byName: (name: string) =>
      users.find(({ name: squadId }) => squadId === name) || null,
    byIndex: (index: number) => users[index % users.length],
  };
};
