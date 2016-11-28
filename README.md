# redux-popup

Redux wrapper for react-modal

## Usage

### As component

```jsx harmony
import {ReduxPopup} from 'redux-popup';

class Popup extends Component {
    
    render() {
        return (
            <ReduxPopup name="test">
                <h1>My popup</h1>
            </ReduxPopup>
        )
    }
    
}
```

### As function

```jsx harmony
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

export default createReduxPopup('test', {})(Popup);
```