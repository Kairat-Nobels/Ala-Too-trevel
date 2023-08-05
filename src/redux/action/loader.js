import { LOADER } from "../reducer/type"

export const changeLoader = (status) => {
    return async (dispatch) => {
        dispatch({
            type: LOADER,
            payload: {value: status}
        })
    }
}