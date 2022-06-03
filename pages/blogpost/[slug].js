import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'

const slug = () => {
    
    const router = useRouter();
    const {slug} = router.query;
    return (
    <div className={styles.container}>
        <h1>Title of the page is {slug}</h1>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi neque consectetur enim molestiae ullam perspiciatis quos consequuntur ipsa accusantium quaerat, libero nulla explicabo amet quis in veritatis doloremque minus eos qui temporibus vitae! Ullam, tempora dolores quisquam, similique voluptates error dignissimos consequuntur aliquam laboriosam accusantium numquam?
        </div>
    </div>
  )
}

export default slug