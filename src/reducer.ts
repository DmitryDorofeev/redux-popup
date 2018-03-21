import {EReduxPopup, getPopupConstant} from './constants';
import {combineReducers, Reducer} from 'redux';
import {Action} from './actions';

export const DEFAULT_POPUP_TYPE = 'popup';

export interface IReduxPopupStore {
    sequence: any[];
}

export function makePopupReducer(type: string): Reducer<IReduxPopupStore> {
    const sequence = (state: any[] = [], action: Action<any>) => {
        switch (action.type) {
            case getPopupConstant(type, EReduxPopup.OPEN_POPUP):
                return [...state, action.payload];
            case getPopupConstant(type, EReduxPopup.CLOSE_POPUP):
                return state.slice(0, -1);
            case getPopupConstant(type, EReduxPopup.CLOSE_ALL_POPUPS):
                return [];
            default:
                return state;
        }
    };

    return combineReducers<IReduxPopupStore>({
        sequence,
    });
}
