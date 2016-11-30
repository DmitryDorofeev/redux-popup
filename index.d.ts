declare module 'redux-popup' {
    type PopupName = string | number;

    export interface IOwnPeduxPopupProps {
        name: PopupName;
        component: React.ComponentClass<any>;
        data?: any;
        shouldCloseOnOverlayClick?: boolean;
        className?: string;
        overlayClassName?: string;
        type?: string;
    }

    export interface IReduxPopupItem {
        name: PopupName;
        data: any;
    }

    export interface IReduxPopupStore {
        popups: Array<PopupName>;
        sequence: Array<IReduxPopupItem>;
    }

    export function openPopup(name: PopupName, data?: any);

    export function closeActivePopup();

    export function closeAllPopups();

    export const OPEN_POPUP: string;
    export const CLOSE_POPUP: string;
    export const CLOSE_ALL_POPUPS: string;

    export function popupReducer(state: any, action: any)

    export const ReduxPopup: React.ComponentClass<IOwnPeduxPopupProps>;

    export function createReduxPopup(name: PopupName, data: any): (component: React.ComponentClass<IOwnPeduxPopupProps>) => React.ComponentClass<IOwnPeduxPopupProps>
}