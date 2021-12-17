import { http } from "../../services/http";
import { Dispatch } from "redux";
import { RepositoryAction, RepositoryActionsTypes } from "../../types/repository";

export const fetchRepositories = (name: string = '') => {
    return async (dispatch: Dispatch<RepositoryAction>) => {
        try {
            dispatch({type: RepositoryActionsTypes.FETCH_REPOSITORY, payload: name})
            const response = await http.get(`/users/${name}/repos`)
            dispatch({type: RepositoryActionsTypes.FETCH_REPOSITORY_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: RepositoryActionsTypes.FETCH_REPOSITORY_ERROR,
                payload: 'Произошла ошибка при загрузке списка репозиториев'
            })
        }
    }
}