import {combineReducers} from "redux";
import location from "./locationReducer";
import weatherMarker from "./weatherMarkerReducer";
import zoom from "./zoomReducer";

export default combineReducers({
    location,weatherMarker,zoom
})