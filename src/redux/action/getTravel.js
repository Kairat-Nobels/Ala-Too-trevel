import { API_GET_TRAVEL } from "../config"
import { GET_TRAVEL } from "../reducer/type"

export const getTravel = (status) => {
    return async (dispatch) => {
        const response = await fetch(API_GET_TRAVEL)
        const resData = await response.json()
        dispatch({
            type: GET_TRAVEL,
            payload: resData
        })
    }
}