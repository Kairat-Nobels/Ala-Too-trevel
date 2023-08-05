import { CHECK_REQ } from "../reducer/type"

export const checkReq = (status) => {
    return async (dispatch) => {
        dispatch({
            type: CHECK_REQ,
            payload: {value: status}
        })
    }
}