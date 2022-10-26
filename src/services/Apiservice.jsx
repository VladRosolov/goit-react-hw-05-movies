const KEY = '482cc9361740c76457d464ceb31e9691';

export function fetchTrandingMovies() {
  return fetch(
    'https://api.themoviedb.org/3/trending/all/day?api_key=482cc9361740c76457d464ceb31e9691'
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
}

export function fetchMovieById(id) {
  const KEY = '482cc9361740c76457d464ceb31e9691';
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
}

export function fetchQuery(value) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${value}&language=en-US&page=1&include_adult=false`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
}

export function fetchCasts(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-US`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
}

export function fetchReviews(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}&language=en-US`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
}
