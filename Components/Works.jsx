import React, { useState } from 'react'
import Link from 'next/link'



//
import styles from '../styles/Works.module.css'




const Services = () => {




    const [details, setDetails] = useState([
        {
            name: 'Official Site',
            link: "https://remarkable-starburst-ee7d0a.netlify.app/",
            img: 'official_site.png'
        },
        {
            name: 'Admin Dashbord Site',
            link: "https://dulcet-mandazi-ab4300.netlify.app/",
            img: 'Admin_Dashbord.png'
        },
        {
            name: 'React Movie Site',
            link: "https://moviesitereact.netlify.app/",
            img: 'Movie_App.png'
        },
        {
            name: 'User Dashbord Menu',
            link: "https://leafy-pithivier-b15cbd.netlify.app",
            img: 'user_dashbord.png'
        },
    ])




    return (
        <section>
            <div className={styles.works}>
                <div className={styles.container}>

                    <div className={styles.title}>
                        My Works
                    </div>

                    <br />
                    <br />

                    <div className={styles.wrapper}>
                        <div className={styles.work} id="works">
                            { 
                                details.map( (d) => {
                                    return (
                                        <Link href={d.link} key={d.name}>
                                        <div className={styles.single}>
                                            <div className={styles.pic}>
                                                <img src={d.img} alt="Work Pic" />
                                            </div>
                                            <div className={styles.details}>
                                                {d.name}
                                            </div>
                                        </div>
                                        </Link>
                                    )
                                })
                            }
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