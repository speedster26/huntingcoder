import React , { useEffect , useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'

const blog = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/api/blog").then((a)=>{
      return a.json();
    }).then((data)=>{
      console.log(data);
      setBlogs(data)
    })

  }, [])
  
  return (
    <div className={styles.container}>
      {blogs.map((blogItem)=>{ 
         return <div key={blogItem.slug}> 
        <h2><Link href={`/blogpost/${blogItem.slug}`}><a>{blogItem.title}</a></Link></h2>
        <p>{blogItem.content.substr(0,300)}...</p>
        </div>
      })}
      
    </div>
  )
}

export default blog