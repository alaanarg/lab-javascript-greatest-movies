// The `movies` array from the file `src/data.js`.
console.log('movies:', movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movieArr) {
  let directors = movieArr.map(function (movie) {
    return movie.director;
  });

  return directors;
}

// console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movieArr) {
  // let spielberg = movieArr.filter(function (movie) {
  //   return movie.director === 'Steven Spielberg';
  // });

  // let spielbergDramas = spielberg.filter(function (movie) {
  //   return movie.genre.indexOf('Drama') >= 0;
  // });

  // let spielbergDramas = spielberg.filter(function (movie) {
  //   return movie.genre.includes('Drama');
  // });

  //One function
  let spielbergDramas = movieArr.filter(function (movie) {
    return (
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );
  });

  return spielbergDramas.length;
}

// console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movieArr) {
  let scores = movieArr.reduce(function (total, movie) {
    return total + movie.score;
  }, 0);

  return parseFloat(scores / movieArr.length).toFixed(2);
  // let avg = scores / movieArr.length;
  // avg = Math.floor(avg * 100) / 100;
  // return avg;
}

// console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movieArr) {
  let dramas = movieArr.filter(function (movie) {
    return movie.genre.includes('Drama');
  });

  let dramasAvg = scoresAverage(dramas);

  return dramasAvg;
}

// console.log(dramaMoviesScore(movies));
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// function orderByYear(movieArr) {
//   let sortedByYear = [...movieArr];
//   sortedByYear.sort(function (a, b) {
//     return a.year - b.year;
//   });
//   return sortedByYear;
// }

//code golf 4 strokes
function orderByYear(movieArr) {
  let sortedByYear = [...movieArr].sort(function (a, b) {
    return a.year - b.year;
  });
  return sortedByYear;
}

//code golf 3 strokes
// function orderByYear(movieArr) {
//   return [...movieArr].sort(function (a, b) {
//     return a.year - b.year;
//   });
// }

// console.log(orderByYear(movies));
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movieArr) {
  let mapArr = movieArr.map(function (movie) {
    return movie.title;
  });

  let sortArr = mapArr.sort(function (a, b) {
    return a.localeCompare(b);
  });

  return sortArr.slice(0, 20);
}

// function orderAlphabetically(movieArr) {
//   return movieArr
//     .map(function (movie) {
//       return movie.title;
//     })
//     .sort(function (a, b) {
//       return a.localeCompare(b);
//     })
//     .slice(0, 20);
// }

console.log(orderAlphabetically(movies));
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}