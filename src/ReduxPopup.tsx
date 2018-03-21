import React, {Component, ComponentClass} from 'react';
import {connect} from 'react-redux';
import {closeActivePopup, PopupName, actionDecorator} from './actions';
import {IReduxPopupStore, DEFAULT_POPUP_TYPE} from './reducer';

export interface IReduxPopupOwnProps {
    name: PopupName;
    component: ComponentClass<any>;
    data?: any;
    className?: string;
    type?: string;
    modal: ComponentClass<any>;
    popupType?: string;
    [key: string]: any;
}

type IReduxPopupStateProps = {
    [key: string]: IReduxPopupStore;
}

interface IReduxPopupDispatchProps {
    closeActivePopup();
}

interface IReduxPopupProps extends IReduxPopupOwnProps,
    IReduxPopupStateProps, IReduxPopupDispatchProps {
}

const noop = () => null;

class ReduxPopup extends Component<IReduxPopupProps, null> {

    onClose() {
        const {
            popupType = DEFAULT_POPUP_TYPE,
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
            popupType = DEFAULT_POPUP_TYPE,
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

const mapStateToProps = (state: any, {popupType = DEFAULT_POPUP_TYPE}) => {
    return {
        [popupType]: state[popupType],
    };
};

export default connect<
    IReduxPopupStateProps,
    IReduxPopupDispatchProps,
    IReduxPopupOwnProps
>(mapStateToProps, {closeActivePopup})(ReduxPopup);
