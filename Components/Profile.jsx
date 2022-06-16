import React from 'react'


//
    import styles from '../styles/Profile.module.css'







const Profile = () => {


    return (
        <>
            <div className={styles.p_wrapper}>
                <div className={styles.p_container}>
                    <div className={styles.pc}>
                        <div className={styles.profile_name}>
                            <div>Hello i&apos;m</div>
                            <div>Saife Uddin </div>
                            <div>Full Stack Web Devloper</div>
                            <div>
                                I make simple but significat & stand out.
                            </div>
                        </div>
                        <div className={styles.profile_pic}>
                            <div className={styles.pic}>
                                <img src="pic.jpg" alt="Author" />
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        </>
    )
}



export default Profile