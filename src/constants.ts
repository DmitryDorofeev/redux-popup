export enum EReduxPopup {
    OPEN_POPUP = '@redux-popup/OPEN',
    CLOSE_POPUP = '@redux-popup/CLOSE',
    CLOSE_ALL_POPUPS = '@redux-popup/CLOSE_ALL',
}

export const DEFAULT_POPUP_TYPE = 'popup';

export function getPopupConstant(type: string = DEFAULT_POPUP_TYPE, constant: EReduxPopup): string {
    return `${type}_${constant}`;
}
