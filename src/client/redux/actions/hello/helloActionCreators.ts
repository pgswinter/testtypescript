import { 
    REQUEST_FETCH,
    REQUEST_FETCH_SUCCESS,
    REQUEST_FETCH_FAIL
} from "./helloActionTypes";

export const reqFetch = () => {
    return {
        type: REQUEST_FETCH
    }
};
export const reqFetchSuccess = (data) => {
    return {
        type: REQUEST_FETCH_SUCCESS,
        payload: data
    }
};
export const reqFetchFail = (error) => ({
    type: REQUEST_FETCH_FAIL,
    error
});