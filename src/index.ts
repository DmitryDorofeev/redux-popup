import ReduxPopupComponent from './ReduxPopup';
import {
    createReduxPopup,
    ICreateParams,
} from './createReduxPopup';
import {
    IReduxPopupStore,
    makePopupReducer,
    DEFAULT_POPUP_TYPE,
} from './reducer';
import {
    EReduxPopup,
    getPopupConstant,
} from './constants';
import {
    actionDecorator,
    registerPopup,
    openPopup,
    closeActivePopup,
    closeAllPopups,
    Action,
    PopupName,
    IOpenPopupActionPayload,
} from './actions';

const ReduxPopup = ReduxPopupComponent;

export {
    ReduxPopup,

    createReduxPopup,
    ICreateParams,

    IReduxPopupStore,
    makePopupReducer,
    DEFAULT_POPUP_TYPE,

    EReduxPopup,
    getPopupConstant,

    actionDecorator,
    registerPopup,
    openPopup,
    closeActivePopup,
    closeAllPopups,
    Action,
    PopupName,
    IOpenPopupActionPayload,
};
