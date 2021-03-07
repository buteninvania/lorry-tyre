import {BaseThunkType, InferActionsTypes} from "./redux-store";

const initialState = {
    toggleDrawer: false
}

export const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "lorry-tyre/app/SET-DRAWER":
            return {
                ...state,
                toggleDrawer: true,
            }
        default:
            return state
    }
}

export const appActions = {
    setAuthUserData: () => ({
        type: "lorry-tyre/app/SET-DRAWER"
    } as const),
}

type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof appActions>
type ThunkType = BaseThunkType<ActionsType>