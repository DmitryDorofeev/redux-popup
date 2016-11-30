declare module 'redux-popup' {

    export interface IOwnPeduxPopupProps {
        name: string;
        component: React.ComponentClass<any>;
        data?: any;
        shouldCloseOnOverlayClick?: boolean;
        className?: string;
        overlayClassName?: string;
        type?: string;
    }

    export interface IReduxPopupItem {
        name: string;
        data: any;
    }

    export interface IReduxPopupStore {
        popups: Array<string>;
        sequence: Array<IReduxPopupItem>;
    }

    export function openPopup(name: string, data?: any);

    export function closeActivePopup();

    export function closeAllPopups();

    export const OPEN_POPUP: string;
    export const CLOSE_POPUP: string;
    export const CLOSE_ALL_POPUPS: string;

    export function popupReducer(state: any, action: any)

    export const ReduxPopup: React.ComponentClass<IOwnPeduxPopupProps>;

    export function createReduxPopup(name: string, data: any): (component: React.ComponentClass<IOwnPeduxPopupProps>) => React.ComponentClass<IOwnPeduxPopupProps>
}