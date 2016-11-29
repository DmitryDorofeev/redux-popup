import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { popupReducer, createReduxPopup, openPopup } from 'redux-popup';

const reducer = combineReducers({
    popup: popupReducer
});

const store =
    (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(reducer);

class PopupInner extends React.Component {
    render() {
        return (
            <div>{this.props.param}</div>
        )
    }
}

const Popup = createReduxPopup('test', { param: 'hello!' })(PopupInner);

let render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <div>
                <h2>Redux Popup</h2>
                <button onClick={() => store.dispatch(openPopup('test', {}))}>Show popup</button>
                <Popup/>
            </div>
        </Provider>,
        document.getElementById('app')
    );
};

if (module.hot) {
    const renderApp = render;
    const renderError = (error) => {
        const RedBox = require('redbox-react');
        ReactDOM.render(
            <RedBox error={error} className="redbox"/>,
            dest
        )
    };
    render = () => {
        try {
            renderApp()
        } catch (error) {
            renderError(error)
        }
    };
    const rerender = () => {
        setTimeout(render)
    };
    // module.hot.accept('./validate', rerender)
    // module.hot.accept('./FieldArraysForm', rerender)
    // module.hot.accept('./FieldArrays.md', rerender)
    // module.hot.accept('!!raw!./FieldArraysForm', rerender)
}

render();