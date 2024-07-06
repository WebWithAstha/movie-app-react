import axios from 'axios'

const instance = axios.create({
    baseURL:'https://api.themoviedb.org/3',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2U0ZjkwYzFkYmQwNDYxNGM2MmE2YmM5MWM2NzFjMCIsIm5iZiI6MTcyMDI0OTg0Mi42NDU4NzksInN1YiI6IjY2ODhlYTNiN2M0MmZjMTA3MjllZGNkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EKtLfaPybEwPDFcHaoKsGLtTiCTzUQoOFbs924aXRqg'
      }
})

export default instance