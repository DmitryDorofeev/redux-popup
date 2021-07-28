import ReduxPopup from './ReduxPopup';
import {
    createReduxPopup,
    ICreateParams,
} from './createReduxPopup';
import {
    IReduxPopupStore,
    makePopupReducer,
} from './reducer';
import {
    EReduxPopup,
    getPopupConstant,
    DEFAULT_POPUP_TYPE,
} from './constants';
import {
    actionDecorator,
    openPopup,
    closePopup,
    closeActivePopup,
    closeAllPopups,
    Action,
    PopupName,
    IOpenPopupActionPayload,
    IClosePopupActionPayload,
} from './actions';

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
    openPopup,
    closePopup,
    closeActivePopup,
    closeAllPopups,
    Action,
    PopupName,
    IOpenPopupActionPayload,
    IClosePopupActionPayload,
};
