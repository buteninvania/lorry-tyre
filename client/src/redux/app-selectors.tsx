import {AppStateType} from './redux-store'

export const getToggleDrawer = (state: AppStateType) => {
    return state.app.toggleDrawer
}
