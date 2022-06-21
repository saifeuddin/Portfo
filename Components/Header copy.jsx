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
                                <i data-menu-icon onClick={()=> clicked(this)}>
                                    <CgMenuCheese />
                                </i>
                            </div>
                        </div>
                        <div className={styles.menu} data-menu="false">
                            <div className={styles.menuitem}>
                                <ul>
                                    <li>
                                        <Link href="/">
                                            Home
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