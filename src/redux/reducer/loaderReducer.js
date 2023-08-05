import { LOADER } from "./type"

const initialState = {
    value: false
}

const loader = (state = initialState, action)=>{
    const {type, payload} = action
    switch (type) {
        case LOADER:
            return payload
        default:
            return state
    }
}
export default loader;