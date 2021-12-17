import { ProfileState, ProfileActionTypes, ProfileAction } from "../../types/profile";

const initialState: ProfileState = {
  id: null,
  profile: null,
  loading: true,
  error: null,
}

export const profileReducer = (state = initialState, action: ProfileAction): ProfileState => {
  switch (action.type) {
    case ProfileActionTypes.FETCH_PROFILE:
      return {...state, loading: true, error: null, profile: null, id: action.payload};

    case ProfileActionTypes.FETCH_PROFILE_SUCCESS:
      return {...state, loading: false, error: null, profile: action.payload};
    
    case ProfileActionTypes.FETCH_PROFILE_ERROR:
      return {...state, loading: false, error: action.payload, profile: null, id: null};
  
    default:
      return state;
  }
}