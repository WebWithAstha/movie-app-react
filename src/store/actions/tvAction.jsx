import axios from "../../utils/axios"
import { loadTv } from "../reducers/tvSlice"
export { resetTv } from "../reducers/tvSlice"

export const asyncLoadTv = (id)=>(async (dispatch,getState)=>{
    const dets = await axios.get(`/tv/${id}`)
    const cast = await axios.get(`/tv/${id}/credits`)
    const extId = await axios.get(`/tv/${id}/external_ids`)
    const similar = await axios.get(`/tv/${id}/similar`)
    // const translations = await axios.get(`/tv/${id}/translations`)
    const watchProviders = await axios.get(`/tv/${id}/watch/providers`)
    const videos = await axios.get(`/tv/${id}/videos`)
    let info = {
        dets:dets.data,
        cast:cast.data.cast,
        extIds:extId.data,
        similar:similar.data.results,
        // translations:translations.data.translations.map(t=>t.english_name),
        watchProviders:watchProviders.data.results.IN,
        video:videos.data.results.find(v=>v.type==='Trailer')
    }
    dispatch(loadTv(info))

})