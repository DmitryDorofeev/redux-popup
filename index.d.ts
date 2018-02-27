declare module 'redux-popup' {
    type PopupName = string | number;

    export interface IReduxPopupOwnProps {
        name: PopupName;
        component: React.ComponentClass<any> | React.StatelessComponent<any>;
        data?: any;
        shouldCloseOnOverlayClick?: boolean;
        className?: string;
        overlayClassName?: string;
        type?: string;
        modal: React.ComponentClass<any>;
        popupType?: EReduxPopupType;
        [key: string]: any;
    }

    export interface IReduxPopupItem {
        name: PopupName;
        data: any;
    }

    export interface IReduxPopupStore {
        sequence: Array<IReduxPopupItem>;
    }

    export function openPopup(name: PopupName, data?: any);

    export function closeActivePopup();

    export function closeAllPopups();

    export function actionDecorator(type: EReduxPopupType);

    export enum EReduxPopup {
        REGISTER_POPUP = '@redux-popup/REGISTER',
        OPEN_POPUP = '@redux-popup/OPEN',
        CLOSE_POPUP = '@redux-popup/CLOSE',
        CLOSE_ALL_POPUPS = '@redux-popup/CLOSE_ALL',
    }

    export function getPopupConstant(type: EReduxPopupType, constant: EReduxPopup): string;

    export enum EReduxPopupType {
        POPUP = 'popup',
        TOAST = 'toast',
    }

    export function popupReducer(state: any, action: any);

    export function makePopupReducer(type: EReduxPopupType);

    export const ReduxPopup: React.ComponentClass<IReduxPopupOwnProps>;

    export function createReduxPopup(name: PopupName, data: any): (component: React.ComponentClass<IReduxPopupOwnProps>) => React.ComponentClass<IReduxPopupOwnProps>
}
