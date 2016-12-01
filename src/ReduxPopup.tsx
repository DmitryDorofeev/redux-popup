import React, {Component} from "react";
import Dialog from 'react-toolbox/lib/dialog';
import {connect} from 'react-redux';
import {registerPopup, closeActivePopup, PopupName} from "./actions";
import ComponentClass = React.ComponentClass;

export interface IOwnPeduxPopupProps {
    name: PopupName;
    component: ComponentClass<any>;
    data: any;
    shouldCloseOnOverlayClick?: boolean;
    className?: string;
    type?: string;
}

interface IReduxPopupProps extends IOwnPeduxPopupProps {
    closeActivePopup();
    registerPopup(name: PopupName);
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
        const {component: Inner, popup: {sequence}, name, className, type} = this.props;
        const active = sequence[sequence.length - 1];
        const dialogData = sequence.filter(dialog => dialog.name === name)[0];
        const data = dialogData ? dialogData.data : {};

        return (
            <Dialog
                active={active && (active.name === name) || false}
                onEscKeyDown={() => this.onClose()}
                theme={className ? { dialog: className } : null}
                type={type}
            >
                <Inner {...data}/>
            </Dialog>
        );
    }
}

const mapStateToProps = ({popup}) => {
    return { popup };
};

export default connect<IOwnPeduxPopupProps>(mapStateToProps, { registerPopup, closeActivePopup })(ReduxPopup);
