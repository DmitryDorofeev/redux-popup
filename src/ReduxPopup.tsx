import React, {Component, ComponentClass} from 'react';
import {connect} from 'react-redux';
import {registerPopup, closeActivePopup, PopupName, actionDecorator} from './actions';
import {IReduxPopupStore, EReduxPopupType} from './reducer';

export interface IReduxPopupOwnProps {
    name: PopupName;
    component: ComponentClass<any>;
    data: any;
    shouldCloseOnOverlayClick?: boolean;
    className?: string;
    type?: string;
    modal: ComponentClass<any>;
    popupType?: EReduxPopupType;
    [key: string]: any;
}

type IReduxPopupStateProps = {
    [key in EReduxPopupType]: IReduxPopupStore;
}

interface IReduxPopupDispatchProps {
    closeActivePopup();
    registerPopup(name: PopupName);
}

interface IReduxPopupProps extends IReduxPopupOwnProps,
    IReduxPopupStateProps, IReduxPopupDispatchProps {
}

const noop = () => null;

class ReduxPopup extends Component<IReduxPopupProps, null> {

    onClose() {
        const {
            popupType = EReduxPopupType.POPUP,
            closeActivePopup = noop,
        } = this.props;
        actionDecorator(popupType)(closeActivePopup());
    }

    render() {
        const {
            component: Inner,
            modal: Dialog,
            name,
            className,
            type,
            popupType = EReduxPopupType.POPUP,
            ...modalProps,
        } = this.props;
        const store: IReduxPopupStore = this.props[popupType] || {} as IReduxPopupStore;
        const {sequence = []} = store;
        const active = sequence[sequence.length - 1];
        const dialogData = sequence.filter(dialog => dialog.name === name)[0];
        const data = dialogData ? dialogData.data : {};

        return (
            <Dialog
                active={active && (active.name === name) || false}
                onClose={this.onClose}
                className={className}
                type={type}
                {...modalProps}
            >
                <Inner {...data}/>
            </Dialog>
        );
    }
}

const mapStateToProps = (state: any) => {
    const storeKeys = Object.values(EReduxPopupType); 

    return Object.keys(state).reduce((acc: any, cur) => {
        if (storeKeys.includes(cur)) {
            acc[cur] = state[cur];
        }
        return acc;
    }, {});
};

export default connect<
    IReduxPopupStateProps,
    IReduxPopupDispatchProps,
    IReduxPopupOwnProps
>(mapStateToProps, { registerPopup, closeActivePopup })(ReduxPopup);
