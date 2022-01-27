let movies = [
  {
    id: "0",
    name: "007",
    score: 90,
  },
  {
    id: "1",
    name: "James",
    score: 65,
  },
  {
    id: "2",
    name: "Buck",
    score: 43,
  },
  {
    id: "3",
    name: "Max",
    score: 77,
  },
  {
    id: "4",
    name: "Alex",
    score: 80,
  },
  {
    id: "5",
    name: "Rora",
    score: 99,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === id);
  return filteredPeople[0];
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};

export const deleteMovie = (id) => {
  const cleanMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanMovies.length) {
    movies = cleanMovies;
    return true;
  } else {
    return false;
  }
};
