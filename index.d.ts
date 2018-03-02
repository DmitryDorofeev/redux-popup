declare module 'redux-popup' {
    type PopupName = string | number;

    export interface IReduxPopupOwnProps {
        name: PopupName;
        component: React.ComponentClass<any>;
        data?: any;
        className?: string;
        overlayClassName?: string;
        type?: string;
        modal: React.ComponentClass<any>;
        popupType?: string;
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

    export function actionDecorator(type: string);

    export enum EReduxPopup {
        REGISTER_POPUP = '@redux-popup/REGISTER',
        OPEN_POPUP = '@redux-popup/OPEN',
        CLOSE_POPUP = '@redux-popup/CLOSE',
        CLOSE_ALL_POPUPS = '@redux-popup/CLOSE_ALL',
    }

    export function getPopupConstant(type: string, constant: EReduxPopup): string;

    export function popupReducer(state: any, action: any);

    export function makePopupReducer(type: string);

    export const ReduxPopup: React.ComponentClass<IReduxPopupOwnProps>;

    export interface ICreateParams {
      name: PopupName;
      modal: React.ComponentClass<any>;
      modalProps?: any;
      data?: any;
      popupType?: string;
      [key: string]: any;
  }

    export function createReduxPopup(
      params: ICreateParams,
    ): (component: React.ComponentClass<IReduxPopupOwnProps>) => React.ComponentClass<IReduxPopupOwnProps>
}
