import {BaseThunkType, InferActionsTypes} from "./redux-store";

const initialState = {
    isAuth: false
}

export const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "lorry-tyre/auth/SET-AUTH":
            return {
                ...state,
                isAuth: true,
            }
        default:
            return state
    }
}

export const authActions = {
    setAuthUserData: () => ({
        type: "lorry-tyre/auth/SET-AUTH"
    } as const),
}

type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof authActions>
type ThunkType = BaseThunkType<ActionsType>