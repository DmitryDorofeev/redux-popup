import reducer from './reducer';
import ReduxPopupComponent from './ReduxPopup';

export {createReduxPopup} from './createReduxPopup';
export * from './actions';
export * from './constants';

export const ReduxPopup = ReduxPopupComponent;
export const popupReducer = reducer;