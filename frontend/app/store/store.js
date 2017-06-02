import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import axios from 'axios';
import reducer from './reducer/reducers';
import {setWeatherData} from "./actions/weatherDataActions";

const middleware  = applyMiddleware(promise(),thunk,createLogger());
const store = createStore(reducer,middleware);
initializeData();
export default store;

function initializeData() {
    store.dispatch(setWeatherData(axios.get("/resource/weather")));
}
