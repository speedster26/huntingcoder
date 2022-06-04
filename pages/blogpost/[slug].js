import React , { useEffect , useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'

const slug = (props) => {
 
  const [blog, setBlog] = useState(props.myBlog)
    
    return (
    <div className={styles.container}>
        <h1>{blog.title}</h1>
        <div>
          {blog.content}
        </div>
    </div>
  )
}
export async function getServerSideProps(context) {
  const {slug} = context.query
  let myData = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  let myBlog = await myData.json();
    
  return {
    
    props: {myBlog}, // will be passed to the page component as props
  }
}

export default slug