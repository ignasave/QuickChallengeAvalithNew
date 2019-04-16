import { 
  SET_DATA,
  SET_DETAIL,
  FETCH_DATA,
  FETCH_DETAIL,
  RECIEVE_ERROR,
  RECIEVE_ERROR_DETAIL,
} from './types'

const initialState = {
  breeds: [],
  imageUrl: '',
  isFetchingDetail: false,
  isErrorDetail: false,
  isFetchingBreeds: false,
  isErrorBreeds: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        breeds: action.data,
        isFetchingBreeds: false
      }

    case SET_DETAIL:
      return {
        ...state,
        imageUrl: action.data,
        isFetchingDetail: false
      }

    case FETCH_DATA:
      return {
        ...state,
        isFetchingBreeds: true
      }

    case FETCH_DETAIL:
      return {
        ...state,
        isFetchingDetail: true,
        isErrorDetail: false
      }
    case RECIEVE_ERROR:
      return {
        ...state,
        isErrorBreeds: true,
        isFetchingBreeds: false
      }

    case RECIEVE_ERROR_DETAIL:
      return {
        ...state,
        isFetchingDetail: false,
        isErrorDetail: true
      }
    default:
      return state
  }
}




