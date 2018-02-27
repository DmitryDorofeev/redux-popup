import React, {ComponentClass} from 'react';
import ReduxPopup from './ReduxPopup';
import {PopupName} from './actions';

export function createReduxPopup(name: PopupName, modal: ComponentClass<any>, modalProps = {}, data = {}, ...rest) {
    return WrappedComponent => {
        return props => (
            <ReduxPopup name={name} component={WrappedComponent} data={data} modal={modal}/>
        );
    }
}
