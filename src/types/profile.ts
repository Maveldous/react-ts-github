interface RespProfile {
  login: string,
  avatar_url: string,
  name: string,
  email: string,
  location: string,
  created_at: string,
  following: number,
  followers: number,
  bio: string,
}

export interface ProfileState {
  id: null | string,
  profile: null | RespProfile,
  loading: boolean;
  error: null | string;
}

export enum ProfileActionTypes {
  FETCH_PROFILE = 'FETCH_PROFILE',
  FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS',
  FETCH_PROFILE_ERROR = 'FETCH_PROFILE_ERROR',
}

interface FetchProfileAction {
  type: ProfileActionTypes.FETCH_PROFILE;
  payload: string,
}

interface FetchProfileSuccessAction {
  type: ProfileActionTypes.FETCH_PROFILE_SUCCESS;
  payload: RespProfile,
}

interface FetchProfileErrorAction {
  type: ProfileActionTypes.FETCH_PROFILE_ERROR;
  payload: string,
}

export type ProfileAction = FetchProfileAction | FetchProfileSuccessAction | FetchProfileErrorAction