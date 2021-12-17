import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {profileReducer} from "./profileReducer";
import {repositoryReducer} from "./repositoryReducer";


export const rootReducer = combineReducers({
    user: userReducer,
    profile: profileReducer,
    repository: repositoryReducer,
})

export type RootState = ReturnType<typeof rootReducer>
