export const people = [
  {
    id: "0",
    name: "Justin",
    age: 28,
    gender: "male",
  },
  {
    id: "1",
    name: "James",
    age: 28,
    gender: "male",
  },
  {
    id: "2",
    name: "Buck",
    age: 4,
    gender: "male",
  },
  {
    id: "3",
    name: "Max",
    age: 21,
    gender: "male",
  },
  {
    id: "4",
    name: "Alex",
    age: 33,
    gender: "male",
  },
  {
    id: "5",
    name: "Rora",
    age: 281,
    gender: "male",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === String(id));
  return filteredPeople[0];
};
