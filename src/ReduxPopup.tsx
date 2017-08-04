import React, {Component, ComponentClass} from "react";
import {connect} from 'react-redux';
import {registerPopup, closeActivePopup, PopupName} from "./actions";

export interface IOwnPeduxPopupProps {
    name: PopupName;
    component: ComponentClass<any>;
    data: any;
    shouldCloseOnOverlayClick?: boolean;
    className?: string;
    type?: string;
    modal: ComponentClass<any>;
    [key: string]: any;
}

interface IReduxPopupProps extends IOwnPeduxPopupProps {
    closeActivePopup();
    registerPopup(name: PopupName);
    popup: any;
}

class ReduxPopup extends Component<IReduxPopupProps, void> {

    onClose() {
        this.props.closeActivePopup();
    }

    render() {
        const {component: Inner, modal: Dialog, popup: {sequence}, name, className, type, ...modalProps} = this.props;
        const active = sequence[sequence.length - 1];
        const dialogData = sequence.filter(dialog => dialog.name === name)[0];
        const data = dialogData ? dialogData.data : {};

        return (
            <Dialog
                active={active && (active.name === name) || false}
                onClose={() => this.onClose()}
                className={className}
                type={type}
                {...modalProps}
            >
                <Inner {...data}/>
            </Dialog>
        );
    }
}

const mapStateToProps = ({popup}) => {
    return { popup };
};

export default connect<any, any, IOwnPeduxPopupProps>(mapStateToProps, { registerPopup, closeActivePopup })(ReduxPopup);
