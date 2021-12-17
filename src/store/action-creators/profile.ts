import { http } from "../../services/http";
import {Dispatch} from "redux";
import { format } from 'date-fns'
import {ProfileAction, ProfileActionTypes} from "../../types/profile";

export const fetchProfile = (name: string = '') => {
    return async (dispatch: Dispatch<ProfileAction>) => {
        try {
            dispatch({type: ProfileActionTypes.FETCH_PROFILE, payload: name})
            const response = await http.get(`/users/${name}`)
            dispatch({type: ProfileActionTypes.FETCH_PROFILE_SUCCESS, payload: {
              ...response.data,
              created_at: format(new Date(response.data.created_at), 'PPP')
            }})
        } catch (e) {
            console.log(e);
            dispatch({
                type: ProfileActionTypes.FETCH_PROFILE_ERROR,
                payload: 'Произошла ошибка при загрузке профиля'
            })
        }
    }
}