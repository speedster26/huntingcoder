import React , { useEffect , useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'

const blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs)
    
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
export async function getServerSideProps(context) {
  let myData = await fetch("http://localhost:3000/api/blog")
  let allBlogs = await myData.json();
    
  return {
    
    props: {allBlogs}, // will be passed to the page component as props
  }
}

export default blog