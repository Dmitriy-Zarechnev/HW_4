type ThemeReducerActionType = ReturnType<typeof changeThemeId>

type InitStateType = {
    themeId: number
}
const initState = {
    themeId: 1
}

export const themeReducer = (state = initState, action: ThemeReducerActionType): InitStateType => {
    switch (action.type) {
        case 'SET_THEME_ID':
            return {themeId: action.id}

        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({type: 'SET_THEME_ID', id} as const)
