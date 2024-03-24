type ThemeReducerActionType = ReturnType<typeof changeThemeId>

type InitStateType = typeof initState
const initState = {
    themeId: 1 as number
}

export const themeReducer = (state: InitStateType = initState, action: ThemeReducerActionType): InitStateType => {
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}

        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({type: 'SET_THEME_ID', id} as const)
