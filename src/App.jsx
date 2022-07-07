import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id:1,
    author:{
      avatarUrl:"https://github.com/JeanLincoln.png",
      name:'Jean Lincoln',
      role:'Front-end developer'
    },
    content:[
      {type:'paragraph', content:'Fala galeraa 👋'},
      {type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type:'link', content:'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-07-06 19:00:00')
  },
  {
    id:2,
    author:{
      avatarUrl:"https://github.com/GabrielMerigo.png",
      name:'Gabriel Merigo',
      role:'code god'
    },
    content:[
      {type:'paragraph', content:'Fala galeraa 👋'},
      {type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type:'link', content:'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-07-07 20:00:00')
  }
]


function App() {

  return (
    <>
    <Header />
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(({id,author,content,publishedAt} )=> {
        return(
          <Post 
            key={id}
            author={author}
            content={content}
            publishedAt={publishedAt}
            
          />)}
        )
      }
      </main>
    </div>
    </>
  )
}

export default App
