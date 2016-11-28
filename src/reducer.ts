import {Action} from "./actions";
import {OPEN_POPUP, CLOSE_POPUP, REGISTER_POPUP, CLOSE_ALL_POPUPS} from "./constants";
import {combineReducers} from "redux";

const popups = (state = [], action: Action<any>): any => {
    switch (action.type) {
        case REGISTER_POPUP:
            return [...state, action.payload];
        default:
            return state;
    }
};

const sequence = (state = [], action: Action<any>) => {
    switch (action.type) {
        case OPEN_POPUP:
            return [...state, action.payload];
        case CLOSE_POPUP:
            return state.slice(0, -1);
        case CLOSE_ALL_POPUPS:
            return [];
        default:
            return state;
    }
};

export default combineReducers<any>({
    sequence,
    popups,
});
