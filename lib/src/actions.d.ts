export interface Action<T> {
    type: string;
    payload: T;
}
export interface IOpenPopupActionPayload {
    name: string;
    data: any;
}
export declare function openPopup(name: any, data: any): Action<IOpenPopupActionPayload>;
export declare function closeActivePopup(): Action<void>;
export declare function closeAllPopups(): Action<void>;
export declare function registerPopup(name: string): Action<string>;
