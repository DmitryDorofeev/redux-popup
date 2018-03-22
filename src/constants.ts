export enum EReduxPopup {
    OPEN_POPUP = 'OPEN',
    CLOSE_POPUP = 'CLOSE',
    CLOSE_ALL_POPUPS = 'CLOSE_ALL',
}

export const DEFAULT_POPUP_TYPE = 'popup';

export function getPopupConstant(type: string, constant: EReduxPopup): string {
    return `@redux-popup/${type}/${constant}`;
}
