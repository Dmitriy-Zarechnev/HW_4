import s from './Loader.module.css'
import rocket from './free-animated-icon-rocket-6172512.gif'

export const Loader = () => {
    return <img className={s.loader} src={rocket} alt={'Rocket anim'}/>
}

