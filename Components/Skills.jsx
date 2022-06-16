import React from 'react'



//
import styles from '../styles/Skills.module.css'




const Skills = () => {
    return (
        <>
            <div className={styles.skills}>
                <div className={styles.s_container}>
                    <div className={styles.s_wrapper}>
                        <div className={styles.ss}>
                            <div className={styles.lists}>
                                <div className={styles.container}>
                                    <div className={styles.single}>
                                        <div>
                                            HTML <span></span>
                                        </div>
                                        <div>
                                            <span></span> CSS
                                        </div>
                                    </div>
                                    <div className={styles.single}>
                                        <div>
                                            JavaScript <span></span>
                                        </div>
                                        <div>
                                            <span></span> Dom Manipulation
                                        </div>
                                    </div>
                                    <div className={styles.single}>
                                        <div>
                                            React Js <span></span>
                                        </div>
                                        <div>
                                            <span></span> Next Js
                                        </div>
                                    </div>
                                    <div className={styles.single}>
                                        <div>
                                            Json <span></span>
                                        </div>
                                        <div>
                                            <span></span> Node Js
                                        </div>
                                    </div>
                                    <div className={styles.single}>
                                        <div>
                                            MongoDB <span></span>
                                        </div>
                                        <div>
                                            <span></span> My SQL
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.gradient}>
                                <div className={styles.ball}>
                                    <div className={styles.skill}>
                                        <div id="skills">
                                            My Skills
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills
