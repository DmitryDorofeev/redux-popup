import {EReduxPopup, getPopupConstant} from './constants';

export interface Action<T> {
    type: EReduxPopup | string;
    payload?: T;
}

export type PopupName = string | number;

export interface IOpenPopupActionPayload {
    name: PopupName;
    data: any;
}

export function actionDecorator(type: string) {
    return function (action: Action<any>) {
        return {
            ...action,
            type: getPopupConstant(type, action.type as EReduxPopup),
        }
    }
}

export function openPopup(name: PopupName, data): Action<IOpenPopupActionPayload> {
    return {
        type: EReduxPopup.OPEN_POPUP,
        payload: {
            name,
            data,
        }
    }
}

export function closeActivePopup(): Action<void> {
    return {
        type: EReduxPopup.CLOSE_POPUP,
    }
}

export function closeAllPopups(): Action<void> {
    return {
        type: EReduxPopup.CLOSE_ALL_POPUPS,
    }
}
