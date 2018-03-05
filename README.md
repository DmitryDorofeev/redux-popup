# redux-popup

Redux wrapper for modals

Uses Dialog from [react-toolbox](http://react-toolbox.com/)

## Usage

### As component

```js
import {ReduxPopup} from 'redux-popup';

class Popup extends Component {
    
    render() {
        return (
            <div>
                <h1>My popup</h1>
            </div>
        )
    }
    
}

class OtherComponentOrContainer extends Component {
    render() {
            return (
                <ReduxPopup name="test" component={Popup} popupType="storeKey"/>
            )
        }
}

```

### As function

```js
import {createReduxPopup} from 'redux-popup';

class Popup extends Component {
    
    render() {
        return (
            <div>
                <h1>My popup</h1>
            </div>
        )
    }
    
}

export default createReduxPopup({
    name: 'test',
    modal: Dialog,
    popupType: 'storeKey',
})(Popup);
```

## Configuring everything

`popupType` property defines store (reducer) key
default value is `'popup'`
```js
    <ReduxPopup name="test" component={Popup} popupType="storeKey"/>
```

to attach reducer use `makePopupReducer`
```js
    import {combineReducers} from 'redux';
    import {makePopupReducer} from 'redux-popup';

    export default combineReducers({
        storeKey: makePopupReducer('storeKey'),
    });
```

to dispatch actions use `actionDecorator`
```js
    import {closeAllPopups, actionDecorator} from 'redux-popup';

    store.dispatch(actionDecorator('storeKey')(closeAllPopups());
```

