import {createStore} from "redux";

const TYPES = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
};

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case TYPES.INCREMENT:
            return state + 1;
        case TYPES.DECREMENT:

            return state > 0 ? state - 1 : state;
        default:
            return state;
    }
};

const store = createStore(counterReducer);

export {store, TYPES};
