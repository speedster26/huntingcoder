import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Hunting Coder
        </h1>
        <div className={styles.imageBox}>
        <Image className={styles.img} src="/home.jpg" width={192} height={128}></Image>
        </div>
        <p className={styles.description}>A blog for coders by a coder</p>
        
      </main>

    </div>
  )
}
