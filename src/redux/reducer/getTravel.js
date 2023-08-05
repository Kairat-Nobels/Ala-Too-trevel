import { CHECK_REQ, GET_TRAVEL } from "./type"

const initialState = []

const getTravel = (state = initialState, action)=>{
    const {type, payload} = action
    switch (type) {
        case GET_TRAVEL:
            return payload
        default:
            return state
    }
}
export default getTravel;