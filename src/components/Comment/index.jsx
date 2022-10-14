import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from '../Avatar'
import styles from './styles.module.css'

export function Comment({ content, onDeleteComment }) {
  const [likes, setLikes] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikes(likes + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src='https://github.com/vitorhugomarcal.png' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Vitor Hugo</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Publciado há 1h</time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Curtir <span>{likes}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}