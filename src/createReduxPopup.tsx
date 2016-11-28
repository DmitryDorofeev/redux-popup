import React from "react";
import ReduxPopup from './ReduxPopup';

export function createReduxPopup(name, data = {}) {
    return WrappedComponent => {
        return props => (
            <ReduxPopup name={name}>
                <WrappedComponent {...data}/>
            </ReduxPopup>
        );
    }
}