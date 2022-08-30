import React, {useState} from 'react'
import axios from 'axios'
import Router from "next/router";
import styles from '../styles/Coffee.module.css'
import { useRouter } from 'next/router';

const PostForm:React.FC = () => {
    const router = useRouter()
    const refreshData = () => {
      router.replace(router.asPath);
    }
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const submitData = async(e:React.SyntheticEvent)=>{
        e.preventDefault()
        const data = {
          title,
          content
        } 
        const res = await axios.post('http://localhost:3000/api/coffee', data)
        setContent('')
        setTitle('')
        refreshData()     
    }
  return (
    <div>
        <form className={styles.card} onSubmit={submitData}>
          <h1>New CoffeeDrafts</h1>
          <input className={styles.padding}
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            type="text"
            value={title}
          />
          <textarea className={styles.padding}
            cols={50}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            rows={8}
            value={content}
          />
          <input className={styles.padding} disabled={!content || !title} type="submit" value="Create" />
          <a className="back" href="#" onClick={() => Router.push("/coffee")}>
            or Cancel
          </a>
        </form>
      </div>
  )
}

export default PostForm