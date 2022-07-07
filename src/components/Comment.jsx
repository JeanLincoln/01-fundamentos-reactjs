import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({content,author}){
    const {comment,commentBox,commentContent,authorAndTime} = styles
    return(
        <div className={comment}>
            <Avatar hasBorder={false} src={author.avatarUrl}/>

            <div className={commentBox}>
                <div className={commentContent}>
                    <header>
                        <div className={authorAndTime}>
                            <strong>{author.name}</strong>
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

                    <p>{content}</p>
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