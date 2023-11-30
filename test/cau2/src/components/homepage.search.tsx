'use client'
import { useState } from 'react'
import styles from '@/styles/homepage.module.css'
import star from '@/public/star.png'
import chat from '@/public/chat.png'
import logo from '@/public/logo.png'
import tie from '@/public/tie.png'
import board from '@/public/board.png'
import { FaSortDown } from "react-icons/fa";
type IProps = {
    roles: IRole[],
    categories: ICategory[],
    setCategoryId(v: string): void,
    setSelected(v: number): void,
    categoryId: string
}
const SearchBox = ({ roles, categories, setCategoryId, setSelected, categoryId }: IProps) => {
    const [isExpand, setIsExpand] = useState<boolean>(false)
    return (
        <nav className={[styles['container-title'], styles['header-container']].join(" ")}>
            <div className={[styles.search, styles.container, isExpand ? styles['sm-height'] : styles['mn-height']].join(" ")}>
                <div className={styles.logo}>
                    <img className={styles.image} src={star.src} />
                    <a href="#">
                        <img className={styles.image} src={logo.src} />
                    </a>
                </div>
                <div className={styles.chat}>
                    <img className={styles.image} src={chat.src} />
                    <span className={styles.title}>
                        nhận xét
                    </span>
                </div>
                <div className={styles['search-box']}>
                    <div className={styles['tab-container']}>
                        <div className={[styles['tab-item'], styles.selected].join(" ")}>
                            <img className={styles.image} src={tie.src} />
                            <span className={styles.info}>
                                Mẫu theo công việc
                            </span>
                        </div>
                        <div className={styles['tab-item']}>
                            <img className={styles.image} src={board.src} />
                            <span className={styles.info}>
                                Mẫu phong cách
                            </span>
                        </div>
                    </div>

                    <div className={styles['tab-container']}>
                        <div className={styles['tab-row']}>
                            <span className={styles.info}>
                                Vai trò:
                            </span>
                            <div className={styles.items}>
                                {roles.map((role) =>
                                (
                                    <div className={styles.item} key={role._id}>
                                        {role.title}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles['tab-row']}>
                            <span className={styles.info}>
                                Ngành nghề:
                            </span>
                            <div className={styles.items}>
                                {categories.map((category) => (
                                    <div className={[styles.item, categoryId === category._id && styles.selected].join(" ")} key={category._id} onClick={() => { setSelected(1); setCategoryId(category._id) }}>
                                        {category.title}
                                    </div>
                                ))}
                                <div className={styles.expand}>
                                    <span onClick={() => setIsExpand(!isExpand)}>
                                        Mở rộng
                                    </span>
                                    <i >
                                        <FaSortDown />
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default SearchBox