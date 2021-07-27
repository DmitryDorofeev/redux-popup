export enum EReduxPopup {
    OPEN_POPUP = 'OPEN',
    CLOSE_ACTIVE_POPUP = 'CLOSE_ACTIVE_POPUP',
    CLOSE_ALL_POPUPS = 'CLOSE_ALL',
    CLOSE_POPUP = 'CLOSE',
}

export const DEFAULT_POPUP_TYPE = 'popup';

export function getPopupConstant(type: string, constant: EReduxPopup): string {
    return `@redux-popup/${type}/${constant}`;
}
