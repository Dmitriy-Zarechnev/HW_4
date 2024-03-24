import {AppStoreType} from '../../hw10/bll/store'

export const themeSelector=(state:AppStoreType):number=>{
    return state.theme.themeId
}