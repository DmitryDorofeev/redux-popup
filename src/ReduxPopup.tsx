import * as React from 'react';
import {connect} from 'react-redux';
import {closeActivePopup, PopupName, actionDecorator, Action} from './actions';
import {IReduxPopupStore} from './reducer';
import {DEFAULT_POPUP_TYPE} from './constants';
import {bindActionCreators} from 'redux';

export interface IReduxPopupOwnProps {
    name: PopupName;
    component: React.ComponentClass<any>;
    data?: any;
    className?: string;
    type?: string;
    modal: React.ComponentClass<any>;
    popupType?: string;
    [key: string]: any;
}

export type IReduxPopupStateProps = {
    [key: string]: IReduxPopupStore;
}

export interface IReduxPopupDispatchProps {
    popupAction(action: Action<any>);
}

export interface IReduxPopupProps extends IReduxPopupOwnProps,
    IReduxPopupStateProps, IReduxPopupDispatchProps {
}

const noop = () => null;

class ReduxPopup extends React.Component<IReduxPopupProps, null> {

    private onClose = (): void => {
        const {
            popupAction = noop,
        } = this.props;
        popupAction(closeActivePopup());
    }

    public render() {
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

const mapStateToProps = (state: any, {popupType = DEFAULT_POPUP_TYPE}: IReduxPopupOwnProps) => {
    return {
        [popupType]: state[popupType],
    };
};

const mapDispatchToProps = (dispatch, {popupType = DEFAULT_POPUP_TYPE}: IReduxPopupOwnProps) => {
    return {
        popupAction: bindActionCreators(actionDecorator(popupType), dispatch),
    }
}

export default connect<
    IReduxPopupStateProps,
    IReduxPopupDispatchProps,
    IReduxPopupOwnProps
>(mapStateToProps, mapDispatchToProps)(ReduxPopup) as React.ComponentType<IReduxPopupOwnProps>;
