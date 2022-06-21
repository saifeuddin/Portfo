import React, {useState} from 'react'



//
import styles from '../styles/Skills.module.css'
import style from '../styles/M_Skills.module.css'




const Skills = () => {

    const [images, setimages] = useState([
        {
            a: 'html.png',
            b: "100%"
        },
        {
            a: "css.png",
            b: "100%"
        },
        {
            a: 'js.png',
            b: "90%"
        },
        {
            a: 'react.png',
            b: "90%"
        },
        {
            a: 'next.jpg',
            b: "90%"
        },
        {
            a: 'node.png',
            b: "100%"
        },
        {
            a: 'mysql.png',
            b: "60%"
        },
        {
            a: 'mongodb.png',
            b: "100%"
        },
        {
            a: 'json.png',
            b: "100%"
        },
        {
            a: 'git.png',
            b: "80%"
        },
        {
            a: 'figma.png',
            b: "60%"
        },
    ])


    return (
        <>
            <div className={styles.skills}>
                <div className={styles.s_container}>
                    <div className={style.mtitle} id="skills">
                        My Skills
                    </div>

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
                                        <div>
                                            Skills
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className={style.M_Skills}>
                <div className={style.M_Skills_container}>
                    <div className={style.mtitle} id='skill'>
                        My Skills
                    </div>
                    <div className={style.Msingleskill}>
                        {
                            images.map((img)=> {
                                return (
                                <div className={style.ss} key={img.a}>
                                    <div>
                                        <img src={`skill/${img.a}`} alt={img.a} />
                                    </div>
                                    <div className={style.progress}>
                                        <div className={style.bg}>
                                            <div className={style.outer}>
                                                <div className={style.inner}>
                                                    {img.b}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills
