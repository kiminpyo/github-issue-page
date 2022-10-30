export const initialState = {
    loading: false,
    issueData: [],
    success: false,
    failure: false,
};

export const INITDATA = "INITDATA";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INITDATA: {
            return { ...state, loading: true, success: false, failure: false };
        }
        case SUCCESS: {
            return {
                ...state,
                loading: false,
                success: true,
                failure: false,
                issueData: action.payload,
            };
        }
        case FAILURE: {
            return { ...state, loading: false, failure: true };
        }
        default:
            return state;
    }
};

export default reducer;
