import { http } from "../../services/http";
import { Dispatch } from "redux";
import { UserAction, UserActionTypes } from "../../types/user";

export const fetchUsers = (query: string = '') => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS, payload: query})
            const response = await http.get('/search/users', {
                params: {q: query}
            })
            dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data.items})
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Произошла ошибка при загрузке списка пользователей'
            })
        }
    }
}

export const setUsers = (users:any[]):UserAction => ({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: users})
