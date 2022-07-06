import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment(){
    const {comment,commentBox,commentContent,authorAndTime} = styles
    return(
        <div className={comment}>
            <Avatar hasBorder={false} src="https://github.com/JeanLincoln.png"/>

            <div className={commentBox}>
                <div className={commentContent}>
                    <header>
                        <div className={authorAndTime}>
                            <strong>Jean Lincoln</strong>
                            <time 
                                title="11 de maio ás 08:13" 
                                dateTime='2022-05-11 08:13:30'>
                                    Cerca de uma hora atrás
                            </time>
                            
                        </div>
                        <button title='Deletar comentário'>
                                <Trash size={24}/>
                            </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}