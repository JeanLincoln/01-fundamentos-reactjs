import { useState } from 'react'
import {format,formatDistanceToNow} from 'date-fns'
import ptbr from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post({author,content,publishedAt}){
    const [comments,setComments] = useState([])
    const [newCommentText,setNewCommentText] = useState('')

    const publishedDateFormatted = 
        format(publishedAt,"dd 'de' LLLL 'ás' HH:mm'h'",{locale:ptbr})
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
        locale:ptbr,
        addSuffix:true
    })

    function handleCreateNewComment(e){
        e.preventDefault()
        setComments([...comments,newCommentText])
        setNewCommentText('')
    }

    function handleNewCOmmentChange(e){
        setNewCommentText(e.target.value)
    }
        

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                   <Avatar src={author.avatarUrl}/>
                        <div className={styles.authorInfo}>
                            <strong>{author.name}</strong>
                            <span>{author.role}</span>
                        </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
             {content.map(({type,content})=>{
                if(type === 'paragraph'){
                    return <p>{content}</p>
                }
                return <p><a href="#">{content}</a></p>
             })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu comentario</strong>

                <textarea 
                    name="comment"
                    placeholder='Deixe seu comentário'
                    value={newCommentText}
                    onChange={handleNewCOmmentChange}
                    ></textarea>
                <footer>
                <button type='submit'>Publicar</button>

                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(textContent => <Comment content={textContent} author={author}/>)}
            </div>
        </article>
    )
}






 

