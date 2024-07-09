export { resetMovie } from "../reducers/MovieSlice";
import axios from "../../utils/axios";
import { loadMovie, resetMovie } from "../reducers/MovieSlice";

export const asyncLoadMovie = (id)=>(async (dispatch,getState)=>{
    // console.log("hey")
    const dets = await axios.get(`/movie/${id}`)
    const cast = await axios.get(`/movie/${id}/credits`)
    const extId = await axios.get(`/movie/${id}/external_ids`)
    const similar = await axios.get(`/movie/${id}/similar`)
    const translations = await axios.get(`/movie/${id}/translations`)
    const watchProviders = await axios.get(`/movie/${id}/watch/providers`)
    let info = {
        dets:dets.data,
        cast:cast.data.cast,
        extIds:extId.data,
        similar:similar.data.results,
        translations:translations.data.translations.map(t=>t.english_name),
        watchProviders:watchProviders.data.results.IN
    }
    // console.log(dets.data)
    dispatch(loadMovie(info))

})