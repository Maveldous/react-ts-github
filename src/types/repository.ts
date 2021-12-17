export interface RespRepository {
  id: string,
  name: string,
  html_url: string,
  stargazers_count: number,
  forks_count: number,
}

export interface RepositoryState {
  query: null | string,
  repositories: null | RespRepository[],
  loading: boolean;
  error: null | string;
}

export enum RepositoryActionsTypes {
  FETCH_REPOSITORY = 'FETCH_REPOSITORY',
  FETCH_REPOSITORY_SUCCESS = 'FETCH_REPOSITORY_SUCCESS',
  FETCH_REPOSITORY_ERROR = 'FETCH_REPOSITORY_ERROR',
}

interface FetchRepositoryAction {
  type: RepositoryActionsTypes.FETCH_REPOSITORY,
  payload: string,
}

interface FetchRepositorySuccessAction {
  type: RepositoryActionsTypes.FETCH_REPOSITORY_SUCCESS,
  payload: RespRepository[],
}

interface FetchRepositoryErrorAction {
  type: RepositoryActionsTypes.FETCH_REPOSITORY_ERROR,
  payload: string,
}

export type RepositoryAction = 
  FetchRepositoryAction 
  | FetchRepositorySuccessAction 
  | FetchRepositoryErrorAction 