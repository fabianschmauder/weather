const initialState = [];

export default function reducer(state = initialState, action) {
    switch (action.type){
        case "SET_WEATHER_DATA_FULFILLED":
            return action.payload.data;
    }
    return state;
}

