import React, { useEffect } from 'react'
import Link from 'next/link'


//
    import styles from '../styles/Header.module.css'




import { CgMenuCheese } from "react-icons/cg";
import { CgAbstract } from "react-icons/cg";



const Header = () => {

    const clicked = ()=> {
        const menu = document.querySelector('[data-menu]')

        if(menu.dataset.menu === 'false') {
            menu.dataset.menu = 'true'
            return
        }
        menu.dataset.menu = 'false'
    }


    useEffect(() => {
        const width = window.innerWidth

        if (width <= 710) {
            const link = document.querySelector("[data-link]")
            const hrf = link.href.slice(0, 28)
            link.href= hrf
        } else {
            return
        }
    })


    return (
        <>
            <header className={styles.header}>
                <div className={styles.h_wrapper}>
                    <div className={styles.container}>
                        <div className={styles.logoicon}>
                            <div>  
                                <i>
                                    <CgAbstract />
                                </i>
                            </div>
                        </div>
                        <div className={styles.menuicon}>
                            <div>  
                                <i data-menu-icon onClick={ ()=> clicked(this)}>
                                    <CgMenuCheese />
                                </i>
                            </div>
                        </div>
                        <div className={styles.menu} data-menu="false">
                            <div className={styles.menuitem}>
                                <ul>
                                    <li>
                                        <Link href="/about">
                                            About Me
                                        </Link>
                                    </li>
                                    <li>
                                        <a href="#skills" data-link>
                                            Skills 
                                        </a>
                                    </li>
                                    <li>
                                        <Link href="#services">
                                            Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#works">
                                            My Works
                                        </Link>
                                    </li>
                                    
                                    <button>
                                        <Link href='/hireme'>
                                            Hire Me
                                        </Link>
                                    </button>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}



export default Header