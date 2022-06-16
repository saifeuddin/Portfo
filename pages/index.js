import Head from 'next/head'


// CSS
  import styles from '../styles/Home.module.css'



//
  import Header from '../Components/Header.jsx'
  import Profile from '../Components/Profile'
  import Skills from '../Components/Skills'
  import Services from '../Components/Services'
  import Works from '../Components/Works'





export default function Home() {

  return (
    <>
      <Head>
        <title> My PortFolio </title>
        <meta name="keywords" content="Portfolio" />
        <meta name="author" content="Saife Uddin" />
        <meta name="description" content="Web Designer & Developer Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="./icon-pattern.svg" />
      </Head>

      <div className={styles.container}>
        <div className={styles.balls}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.dots}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <div className={styles.main}>
          <Header />
          <main>
            <Profile />
            <Skills />
            <Services />
            <Works />
          </main>
        </div>
      </div>
    </>
  )
}


