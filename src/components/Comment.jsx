import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment(){
    return(
        <div className={styles.comment}>
            <img src="https://github.com/JeanLincoln.png" alt="Profile photo" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
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