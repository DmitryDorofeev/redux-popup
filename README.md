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
                <ReduxPopup name="test" component={Popup}/>
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

export default createReduxPopup('test', {})(Popup);
```