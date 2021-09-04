const NumberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", " ");

const PersonalMovieDB = {
    count: NumberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++){
    const question = prompt("Один из последних просмотренных фильмов?", " "),
          b = prompt("На сколько вы его оцените?", " ");
    if ( question != null && b != null  && question !== '' && b !== '' && question.length <= 50){
        PersonalMovieDB.movies[question] = b;
        console.log("Yes");
    } else {
        console.log("Wrong");
        i--;
    }
}
if (PersonalMovieDB.count < 10){
    console.log("Просмотрено мало фильмов");
}else if (PersonalMovieDB.count >= 10 && PersonalMovieDB.count < 30){
    console.log("Вы классический зритель");
}else if (PersonalMovieDB.count >= 30) {
    console.log("Вы опытный киноман");
}else{
    console.log("No");
}
console.log(PersonalMovieDB);