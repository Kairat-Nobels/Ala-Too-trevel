import { CHECK_REQ } from "./type"

const initialState = {
    value: ""
}

const check = (state = initialState, action)=>{
    const {type, payload} = action
    switch (type) {
        case CHECK_REQ:
            return payload
        default:
            return state
    }
}
export default check;