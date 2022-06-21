//
    import Header from '../Components/Header copy.jsx'
    import About from '../Components/About.jsx'


//
    import styles from '../styles/About.module.css'





const about = () => {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.main}>
                    <Header />
                    <main>
                        <About />
                    </main>
                </div>
            </div>
        </>
    )
}




export default about