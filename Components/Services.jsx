import React from 'react'




//
    import styles from '../styles/Services.module.css'




const Services = () => {
    return (
        <section>
            <div className={styles.services}>
                <div className={styles.container}>
                    <div className={styles.title}>
                        Services
                    </div>
                    <br />
                    <br />
                    <div className={styles.wrapper}>
                        <div className={styles.service} id
                        ='services'>
                            <div className={styles.single}>
                                <div>
                                    <img src='design.gif' />
                                </div>
                                <div>
                                    Web Design
                                </div>
                            </div>
                            <div className={styles.single}>
                                <div>
                                    <img src='developer.gif' />
                                </div>
                                <div>
                                    Web Development
                                </div>
                            </div>
                            <div className={styles.single}>
                                <div>
                                    <img src='ui.gif' />
                                </div>
                                <div>
                                    UI/Ux
                                </div>
                            </div>
                            <div className={styles.single}>
                                <div>
                                    <img src='react.gif' />
                                </div>
                                <div>
                                    React Next & Responsive coding
                                </div>
                            </div>
                            <div className={styles.single}>
                                <div>
                                    <img src='search.gif' />
                                </div>
                                <div>
                                    SEO
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        </section>
    )
}




export default Services