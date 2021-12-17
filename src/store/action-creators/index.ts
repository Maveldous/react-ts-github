import * as UserActionCreators from './user'
import * as ProfileActionCreators from './profile'
import * as RepositoryActionCreators from './repository'

export default {
    ...UserActionCreators,
    ...ProfileActionCreators,
    ...RepositoryActionCreators,
}
