import React from "react";
import ReduxPopup from './ReduxPopup';
import {PopupName} from './actions';

export function createReduxPopup(name: PopupName, data = {}) {
    return WrappedComponent => {
        return props => (
            <ReduxPopup name={name} component={WrappedComponent} data={data}/>
        );
    }
}