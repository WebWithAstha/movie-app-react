import axios from "../../utils/axios"
import { loadPerson} from "../reducers/personSlice"
export { resetPerson } from "../reducers/personSlice"


export const asyncLoadPerson = (id)=>(async (dispatch,getState)=>{
    const dets = await axios.get(`/person/${id}`)
    const combinedcredits = await axios.get(`/person/${id}/combined_credits`)
    const extId = await axios.get(`/person/${id}/external_ids`)
    const images = await axios.get(`/person/${id}/images`)
    let info = {
        dets:dets.data,
        allCredits:combinedcredits.data.cast,
        extIds:extId.data,
        images:images.data.profiles,
    }
    dispatch(loadPerson(info))

})