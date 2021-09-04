const NumberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", " ");

const PersonalMovieDB = {
    count: NumberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// 1 цикл

for (let i = 0; i <= 1; i++){
    const question = prompt("Какой фильм вы посмотрели"), answer = prompt("И его оценка");
    if (question != null && answer != null && question !== "" && answer !== "" && question.length <= 50){
        PersonalMovieDB.movies[question] = answer;
        console.log("Yep")
    }else{
        console.log("No")
        i--
    }
};

// 2 цикл

let i = 0
// while (i <= 1){
//     const question = prompt("Какой фильм вы посмотрели"), answer = prompt("И его оценка");
//     i++
//     if (question != null && answer != null && question !== "" && answer !== "" && question.length <= 50){
//         PersonalMovieDB.movies[question] = answer;
//         console.log("Yep")
//     }else{
//         console.log("No")
//         i--
//     }
// }

// 3 цикл

// do{
//     const question = prompt("Какой фильм вы посмотрели"), answer = prompt("И его оценка");
//     i++;
//     if (question != null && answer != null && question !== "" && answer !== "" && question.length <= 50){
//         PersonalMovieDB.movies[question] = answer;
//         console.log("Yep");
//     }else {
//         console.log("No");
//         i--;
//     }
// }while ( i <= 1)

if (PersonalMovieDB.count < 10 ){
    console.log("Просмотрено довольно мало фильмов");
}else if(PersonalMovieDB.count >= 10 && PersonalMovieDB.count <30){
    console.log("Вы классический зритель");
}else if (PersonalMovieDB.count >= 30){
    console.log("Вы киноман")
}else{
    console.log("Вы ввели не цифру")
}

console.log(PersonalMovieDB);