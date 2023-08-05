import { CHECK_ADMIN } from "../reducer/type"

export const checkAdminUpdate = (status) => {
    return async (dispatch) => {
        dispatch({
            type: CHECK_ADMIN,
            payload: {value: status}
        })
    }
}