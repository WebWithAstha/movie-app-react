import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Trending from '../components/Trending'
import Popular from '../components/Popular'
import People from '../components/People'
import Movie from '../components/Movie'
import TvShow from '../components/TvShow'
import MovieDetails from '../components/partials/MovieDetails'
import Trailer from '../components/partials/Trailer'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trending" element={<Trending />} />
      <Route path="/popular" element={<Popular />} />
      <Route path="/movies" element={<Movie />} />
      <Route path="/people" element={<People />} />
      <Route path="/tvshows" element={<TvShow />} />
      <Route path="/movie/details/:id" element={<MovieDetails />} >
        <Route path='trailer/:id' element={<Trailer />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes