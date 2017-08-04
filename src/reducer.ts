import {OPEN_POPUP, CLOSE_POPUP, REGISTER_POPUP, CLOSE_ALL_POPUPS} from "./constants";
import {combineReducers, Reducer, Action} from "redux";

export interface IReducer {
    sequence: any[];
}

const sequence: Reducer<any[]> = (state: any[] = [], action: any) => {
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

export default combineReducers<IReducer>({
    sequence,
});
