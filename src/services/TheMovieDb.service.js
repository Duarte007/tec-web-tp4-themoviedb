const url = "https://api.themoviedb.org/3"
const apiKey = "86d40ddd2005404ed8a970a382d19c23"

const TheMovieDbService = {
    getPopularMovies: (page = 1) => {
        const queryString = `api_key=${apiKey}&page=${page}`

        return fetch(`${url}/movie/popular?${queryString}`, { method: "GET" })
            .then((response) => response.json())
            .then((data) => data)
            .catch(error => {
                console.log(error)
                throw new Error(error)
            })
    },
    getUpcomingMovies: (page = 1) => {
        const queryString = `api_key=${apiKey}&page=${page}`

        return fetch(`${url}/movie/upcoming?${queryString}`, { method: "GET" })
            .then((response) => response.json())
            .then((data) => data)
            .catch(error => {
                console.log(error)
                throw new Error(error)
            })

    },
    getTopRatedMovies: (page = 1) => {
        const queryString = `api_key=${apiKey}&page=${page}`

        return fetch(`${url}/movie/top_rated?${queryString}`, { method: "GET" })
            .then((response) => response.json())
            .then((data) => data)
            .catch(error => {
                console.log(error)
                throw new Error(error)
            })
    },
    getMoviesByFilter: (filter, page = 1) => {
        if (!filter) return TheMovieDbService.getPopularMovies()
        let queryString = `api_key=${apiKey}&query=${filter}&page=${page}`

        return fetch(`${url}/search/movie?${queryString}`, { method: "GET" })
            .then((response) => response.json())
            .then((data) => data)
            .catch(error => {
                console.log(error)
                throw new Error(error)
            })
    },
    getMovieDetails: (movieId) => {
        let queryString = `api_key=${apiKey}`
        return fetch(`${url}/movie/${movieId}?${queryString}`, { method: "GET" })
            .then((response) => response.json())
            .then((data) => data)
            .catch(error => {
                console.log(error)
                throw new Error(error)
            })
    }
}