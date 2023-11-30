'use client'
import { useState } from 'react'
import styles from '@/styles/homepage.module.css'
import logo from '@/public/logo.png'
import { FaBars } from "react-icons/fa";
const Header = () => {
    const [isMenu, setIsMenu] = useState<boolean>(false)
    return (
        <header>
            <nav className={styles['header-title']}>
                <div className={[styles.container, styles.header].join(" ")}>
                    <div className={styles['header-brand']}>
                        <a href="#">
                            <img src={logo.src} />
                        </a>
                        <i onClick={() => setIsMenu(!isMenu)}><FaBars /></i>
                    </div>
                    <nav className={isMenu ? styles['header-sm'] : styles['header-link']}>
                        <nav className={styles['group-link']}>
                            <a href="#">
                                <span>Trang chủ </span>
                            </a>
                            <a href="#" className={styles.selected}>
                                <span>Mẫu CV </span>
                            </a>
                            <a href="#">
                                <span>Lý lịch của tôi</span>
                            </a>
                            <a href="#">
                                <span>Hướng dẫn</span>
                            </a>
                            <a href="#">
                                <span>Mẫu PPT </span>
                                <span className={styles['header-sub-info']}>
                                    free
                                </span>
                            </a>
                        </nav>
                    </nav>
                    <div className={styles.button}>
                        <button>Đăng nhập / Đăng ký</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header