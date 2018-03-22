import * as React from 'react';
import ReduxPopup from './ReduxPopup';
import {PopupName} from './actions';
import {DEFAULT_POPUP_TYPE} from './constants';

export interface ICreateParams {
    name: PopupName;
    modal: React.ComponentClass<any>;
    modalProps?: any;
    data?: any;
    popupType?: string;
    [key: string]: any;
}

export function createReduxPopup({name, modal, modalProps = {}, data = {}, popupType = DEFAULT_POPUP_TYPE, ...rest}: ICreateParams) {
    return WrappedComponent => {
        return props => (
            <ReduxPopup name={name} component={WrappedComponent} data={data} modal={modal} popupType={popupType} {...rest} {...props} />
        );
    }
}
