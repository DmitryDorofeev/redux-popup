declare module 'redux-popup' {

    export interface IOwnPeduxPopupProps {
        name: string;
        shouldCloseOnOverlayClick?: boolean;
        className?: string;
        overlayClassName?: string;
        type?: string;
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