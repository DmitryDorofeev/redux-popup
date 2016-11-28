import {OPEN_POPUP, CLOSE_POPUP, REGISTER_POPUP} from "./constants";

export interface Action<T> {
    type: string;
    payload: T;
}

export interface IOpenPopupActionPayload {
    name: string;
    data: any;
}

export function openPopup(name, data): Action<IOpenPopupActionPayload> {
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

export function registerPopup(name: string): Action<string> {
    return {
        type: REGISTER_POPUP,
        payload: name,
    }
}
