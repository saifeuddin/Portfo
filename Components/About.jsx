import React from 'react'



//
    import styles from '../styles/About.module.css'



//  
    import { BsFacebook } from "react-icons/bs";
    import { RiWhatsappFill } from "react-icons/ri";
    import { MdAttachEmail } from "react-icons/md";



const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.about_container}>
                <div className={styles.section}>
                    <div className={styles.title}>
                        About Me
                    </div>
                    <div className={styles.subtitle}>
                        Allow Me To Introduce My Self
                    </div>
                    <div className={styles.svvg}>
                        <img src="22.svg" alt="" />
                    </div>
                </div>
                <div className={styles.section}>
                    <div className={''}>
                        Hi there my name is Saife Uddin. I am web developer and UI & UX designer. Freelance web design and design is what i{"'"}m doing presently.
                    </div>
                    <div className={''}>
                        I am obsessed with making things and even more obsessed with making things better. I am actively involved in the web design community for the last 2 years. Making pixel magic and turning into a beautiful site. However extend beyond the work, i love helping people with branding.

                    </div>
                    <div className={''}>
                        I have experience with {' '}
                        <b>
                            HTML . CSS . JavaScript . React & Next JS . Node JS . MongoDB {' '}
                        </b>
                        . So, if you are interested in having then feel free to to let me know no I will be happy  to work with you you thank you
                    </div>
                </div>


                <div className={styles.social}>
                    <div className={styles.social_wrapper}>
                        <div className={styles.social_svg}>
                            <img src="70.svg" alt="" />
                        </div>
                        <div className={styles.social_icons}>
                            <div>
                                <BsFacebook />
                                <a href="https://www.facebook.com/saifeuddin0">
                                    www.facebook.com
                                </a>
                            </div>
                            <div>
                                <RiWhatsappFill />
                                <span>
                                    01303955806
                                </span>
                            </div>
                            <div>
                                <MdAttachEmail />
                                <span>
                                    developersaife020@gmail.com
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
