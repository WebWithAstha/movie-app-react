export { resetMovie } from "../reducers/MovieSlice";
import axios from "../../utils/axios";
import { loadMovie } from "../reducers/MovieSlice";

export const asyncLoadMovie = (id)=>(async (dispatch,getState)=>{
    const dets = await axios.get(`/movie/${id}`)
    const cast = await axios.get(`/movie/${id}/credits`)
    const extId = await axios.get(`/movie/${id}/external_ids`)
    const similar = await axios.get(`/movie/${id}/similar`)
    const translations = await axios.get(`/movie/${id}/translations`)
    const watchProviders = await axios.get(`/movie/${id}/watch/providers`)
    const videos = await axios.get(`/movie/${id}/videos`)
    let info = {
        dets:dets.data,
        cast:cast.data.cast,
        extIds:extId.data,
        similar:similar.data.results,
        translations:translations.data.translations.map(t=>t.english_name),
        watchProviders:watchProviders.data.results.IN,
        video:videos.data.results.find(v=>v.type==='Trailer')
    }
    dispatch(loadMovie(info))

})