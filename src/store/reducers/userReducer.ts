import { UserState, UserActionTypes, UserAction } from "../../types/user";

const initialState: UserState = {
  query: '',
  users: [],
  loading: true,
  error: null,
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return {...state, loading: true, error: null, users: [], query: action.payload};

    case UserActionTypes.FETCH_USERS_SUCCESS:
      return {...state, loading: false, error: null, users: action.payload};
    
    case UserActionTypes.FETCH_USERS_ERROR:
      return {...state, loading: false, error: action.payload, users: [], query: ''};
  
    default:
      return state;
  }
}