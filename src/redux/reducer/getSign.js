import { GET_SIGN } from "./type"

const initialState = []

const getSign = (state = initialState, action)=>{
    const {type, payload} = action
    switch (type) {
        case GET_SIGN:
            return payload
        default:
            return state
    }
}
export default getSign;