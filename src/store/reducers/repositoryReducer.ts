import { RepositoryState, RepositoryAction, RepositoryActionsTypes } from "../../types/repository";

const initialState: RepositoryState = {
  query: null,
  repositories: null,
  loading: true,
  error: null,
}

export const repositoryReducer = (state = initialState, action: RepositoryAction): RepositoryState => {
  switch (action.type) {
    case RepositoryActionsTypes.FETCH_REPOSITORY:
      return {...state, loading: true, error: null, repositories: null, query: action.payload};

    case RepositoryActionsTypes.FETCH_REPOSITORY_SUCCESS:
      return {...state, loading: false, error: null, repositories: action.payload};
    
    case RepositoryActionsTypes.FETCH_REPOSITORY_ERROR:
      return {...state, loading: false, error: action.payload, repositories: null, query: ''};

    default:
      return state;
  }
}