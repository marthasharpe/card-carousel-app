import {
    SORT_HEADING,
    SORT_SUBHEADING,
    SORT_LOW_PRICE,
    SORT_HIGH_PRICE,
} from './../actions/actionCreators';
import json from './../UIE-InterviewProject';

const initialState = {
    data: json,
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case SORT_HEADING:
            return {
                ...state,
                data: action.data
            }
        case SORT_SUBHEADING:
            return {
                ...state,
                data: action.data
            }
        case SORT_LOW_PRICE:
            return {
                ...state,
                data: action.data
            }
        case SORT_HIGH_PRICE:
            return {
                ...state,
                data: action.data
            }
        default:
            return state;
    }
}

export default rootReducer;