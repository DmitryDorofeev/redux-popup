import React, {Component} from "react";
import Modal from 'react-modal';
import {connect} from 'react-redux';
import {registerPopup, closeActivePopup} from "./actions";

interface IOwnPeduxPopupProps {
    name: string;
    shouldCloseOnOverlayClick?: boolean;
    className?: string;
    overlayClassName?: string;
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
        const {children, popup: {sequence}, name, className, overlayClassName} = this.props;
        const active = sequence[sequence.length - 1];
        return (
            <Modal
                isOpen={active && (active.name === name)}
                onRequestClose={() => this.onClose()}
                className={className}
                overlayClassName={overlayClassName}
            >
                {children}
            </Modal>
        );
    }
}

const mapStateToProps = ({popup}) => {
    return { popup };
};

export default connect<IOwnPeduxPopupProps>(mapStateToProps, { registerPopup, closeActivePopup })(ReduxPopup);
