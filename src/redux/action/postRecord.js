import { currentDate } from "../../components/Script"
import { API_GET_SIGN } from "../config"
import { CHECK_REQ } from "../reducer/type"
import { getSign } from "./getSign"
import { changeLoader } from "./loader"

export const postRecord = ({name, phone, travelId}) => {
    const date = currentDate();
    return async (dispatch) => {
        const response = await fetch(API_GET_SIGN, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: name,
                phone: phone,
                travel: travelId,
                date: date,
                type: 2
            }),
        })
        if (response.status == 201) {
            dispatch({
                type: CHECK_REQ,
                payload: { value: 'accept' }
            })
        } else {
            dispatch({
                type: CHECK_REQ,
                payload: { value: 'error' }
            })
        }
        dispatch(changeLoader(false))
        dispatch(getSign())
    }
}

const data = [
    {
        "name": "Нуртилек",
        "phone": "0555 67 87 98",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "date": "14.04.2023",
        "type": "1",
        "id": "1",
        "travel": "1"
    },
    {
        "name": "Сезим",
        "phone": "0774 94 34 54",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "date": "14.04.2023",
        "type": "1",
        "id": "2",
        "travel": "1"
    },
    {
        "name": "Нурсулу",
        "phone": "0220 45 34 54",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "date": "14.04.2023",
        "type": "1",
        "id": "3",
        "travel": "1"
    },
    {
        "name": "Актилек",
        "phone": "0708 90 65 23",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "date": "14.04.2023",
        "type": "1",
        "id": "4",
        "travel": "1"
    },
    {
        "name": "Алишер",
        "phone": "0556 23 42 23",
        "description": "",
        "date": "14.04.2023",
        "type": "2",
        "id": "5",
        "travel": "1"
    },
    {
        "name": "Мурат",
        "phone": "0774 34 23 43",
        "description": "description 6",
        "date": "14.04.2023",
        "type": "2",
        "id": "6",
        "travel": "1"
    },
    {
        "name": "Азиза",
        "phone": "0999 45 34 53",
        "description": "description 7",
        "date": "14.04.2023",
        "type": "2",
        "id": "7",
        "travel": "1"
    }
]