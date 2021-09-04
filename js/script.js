const NumberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", " ");

const PersonalMovieDB = {
    count: NumberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const question = prompt("Один из последних просмотренных фильмов?", " "),
      answer = prompt("На сколько вы его оцените?", " "),
      question_second = prompt("Один из последних просмотренных фильмов?", " "),
      answer_second = prompt("На сколько вы его оцените?", " ");

PersonalMovieDB.movies[question] = answer;
PersonalMovieDB.movies[question_second] = answer_second;

console.log(PersonalMovieDB);