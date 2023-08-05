import { combineReducers } from "redux";
import loader from './loaderReducer';
import check from "./checkReducer";
import getTravel from "./getTravel";
import getSign from "./getSign";
import getCheckAdmin from "./checkAdminReducer";

export const rootReducer = combineReducers({
    loader: loader,
    check: check,
    travel: getTravel,
    sign: getSign,
    getCheckAdmin: getCheckAdmin
    
})