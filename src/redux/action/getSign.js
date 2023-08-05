import { API_GET_SIGN } from "../config"
import { GET_SIGN } from "../reducer/type"

export const getSign = (status) => {
    return async (dispatch) => {
        const response = await fetch(API_GET_SIGN)
        const resData = await response.json()
        dispatch({
            type: GET_SIGN,
            payload: resData
        })
    }
}