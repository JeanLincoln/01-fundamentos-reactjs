import styles from './Avatar.module.css'

export function Avatar({src,hasBorder=true}){
    const {avatarWithBorder,avatar} = styles

    return(
        <div>
             <img 
                    className={hasBorder
                                ?avatarWithBorder
                                :avatar
                               }
                    src={src}
                    alt="Profile photo" />
        </div>
    )
}