import ReduxPopup from './ReduxPopup';
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
    openPopup,
    closeActivePopup,
    closeAllPopups,
    Action,
    PopupName,
    IOpenPopupActionPayload,
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
    closeActivePopup,
    closeAllPopups,
    Action,
    PopupName,
    IOpenPopupActionPayload,
};
