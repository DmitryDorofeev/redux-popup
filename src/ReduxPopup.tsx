import React, {Component} from "react";
import Dialog from 'react-toolbox/lib/dialog/Dialog';
import {connect} from 'react-redux';
import {registerPopup, closeActivePopup} from "./actions";

export interface IOwnPeduxPopupProps {
    name: string;
    shouldCloseOnOverlayClick?: boolean;
    className?: string;
    overlayClassName?: string;
    type?: string;
}

interface IReduxPopupProps extends IOwnPeduxPopupProps {
    closeActivePopup();
    registerPopup(name: string);
    popup: any;
}

class ReduxPopup extends Component<IReduxPopupProps, void> {

    componentWillMount() {
        this.props.registerPopup(this.props.name);
    }

    componentWillUnmount() {
        //todo
    }

    onClose() {
        this.props.closeActivePopup();
    }

    render() {
        const {children, popup: {sequence}, name, className, type} = this.props;
        const active = sequence[sequence.length - 1];
        return (
            <Dialog
                active={active && (active.name === name) || false}
                onEscKeyDown={() => this.onClose()}
                className={className}
                theme={className ? { dialog: className } : null}
                type={type}
            >
                {children}
            </Dialog>
        );
    }
}

const mapStateToProps = ({popup}) => {
    return { popup };
};

export default connect<IOwnPeduxPopupProps>(mapStateToProps, { registerPopup, closeActivePopup })(ReduxPopup);
