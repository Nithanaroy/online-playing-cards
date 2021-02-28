import Head from 'next/head'
import Stage from "./stage"
import Client from "./client"

// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div style={{ backgroundColor: "darkcyan", "height": "100vh", display: "flex"}}>
      <Head>
        <title>Online Playing Cards</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stage></Stage>
      <Client></Client>
      <footer></footer>
    </div>
  )
}
