import {Action} from 'redux';
import {Component} from 'react';
import {IReduxPopupProps} from './src/ReduxPopup';

declare module 'redux-popup' {
    export function openPopup(name: string, data: any);
    export function closeActivePopup();
    export function closeAllPopups();

    export const OPEN_POPUP: string;
    export const CLOSE_POPUP: string;
    export const CLOSE_ALL_POPUPS: string;

    export function popupReducer(state: any, action: Action)

    export const ReduxPopup: Component<IReduxPopupProps, void>;
    export function createReduxPopup(name: string, data: any): (component: Component<any, any>) => Component<any, any>
}