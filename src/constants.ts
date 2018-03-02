export enum EReduxPopup {
    REGISTER_POPUP = '@redux-popup/REGISTER',
    OPEN_POPUP = '@redux-popup/OPEN',
    CLOSE_POPUP = '@redux-popup/CLOSE',
    CLOSE_ALL_POPUPS = '@redux-popup/CLOSE_ALL',
}

export function getPopupConstant(type: string, constant: EReduxPopup): string {
    return `${type}_${constant}`;
}
