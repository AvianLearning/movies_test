const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getTitles = function () {
  return this.films.map((film) => {
    return film.title;
  })
  // this.film.map(film => film.title);
};

Cinema.prototype.findTitle = function (title) {
  return this.films.find((film) => {
     return film.title === title;   
})
}

Cinema.prototype.genreFilter = function (genre) {
  return this.films.filter((film) => {
    return film.genre === genre;
  })
};

Cinema.prototype.checkYear = function (year) {
  return this.films.some((film) => {
    return film.year === year
  });
}

Cinema.prototype.lengthCheck = function (time) {
  return this.films.every((film) => {
    return film.length > time;
  })
}

Cinema.prototype.lengthTotal = function (films) {
  const sumTotal = this.films.reduce((runningTotal, films) => {
    return runningTotal + films.length;
  }, 0);
  return sumTotal;
}

Cinema.prototype.filmsByProperty = function(property, value) {
  const movies = this.films.filter((film) => {
    return film[property] === value;
  })
  return movies;
}

module.exports = Cinema;
