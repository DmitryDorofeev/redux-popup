import {OPEN_POPUP, CLOSE_POPUP, REGISTER_POPUP, CLOSE_ALL_POPUPS} from "./constants";

export interface Action<T> {
    type: string;
    payload: T;
}

export type PopupName = string | number;

export interface IOpenPopupActionPayload {
    name: PopupName;
    data: any;
}

export function openPopup(name: PopupName, data): Action<IOpenPopupActionPayload> {
    return {
        type: OPEN_POPUP,
        payload: {
            name,
            data,
        }
    }
}

export function closeActivePopup(): Action<void> {
    return {
        type: CLOSE_POPUP,
        payload: null,
    }
}

export function closeAllPopups(): Action<void> {
    return {
        type: CLOSE_ALL_POPUPS,
        payload: null,
    }
}


export function registerPopup(name: PopupName): Action<PopupName> {
    return {
        type: REGISTER_POPUP,
        payload: name,
    }
}
