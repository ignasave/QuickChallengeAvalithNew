import { 
    SET_DATA,
    SET_DETAIL,
    FETCH_DATA,
    FETCH_DETAIL,
    RECIEVE_ERROR,
    RECIEVE_ERROR_DETAIL,
  } from './types'
  
export const setData = breeds => {
    return dispatch => {
      dispatch({ type: SET_DATA, data: breeds })
    }
  }
  
  export const setDetail = url => {
    return dispatch => {
      dispatch({ type: SET_DETAIL, data: url })
    }
  }
  
  export const fetch_detail = () => {
    return dispatch => {
      dispatch({ type: FETCH_DETAIL })
    }
  }
  
  export const fetch_data = () => {
    return dispatch => {
      dispatch({ type: FETCH_DATA })
    }
  }
  
  export const recieve_error = () => {
    return dispatch => {
      dispatch({ type: RECIEVE_ERROR })
    }
  }
  
  export const recieve_error_detail = () => {
    return dispatch => {
      dispatch({ type: RECIEVE_ERROR_DETAIL })
    }
  }