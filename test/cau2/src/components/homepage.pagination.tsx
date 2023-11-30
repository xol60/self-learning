'use client'
import styles from '@/styles/homepage.module.css'
import { useState, useEffect } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

type IProps = {
    total: number,
    selected: number,
    setSelected(v: number): void
}
const Pagination = ({ total, selected, setSelected }: IProps) => {
    const [numbers, setNumbers] = useState<Array<number | string>>([])
    useEffect(() => {
        const getNumbers = () => {
            const mininumNumber: (string | number)[] = [1, 2, 3, 4, 5, 6]
            if (total <= 8) setNumbers(Array.from({ length: total }, (_, i) => i + 1))
            else {
                if (mininumNumber.includes(selected)) {
                    mininumNumber.push('...', total);
                }
                else {
                    const left = total - selected
                    mininumNumber.length = mininumNumber.length - left
                    if (left === 1) mininumNumber.push('...', selected, total)
                    if (left === 0) mininumNumber.push('...', total)
                    if (left >= 2) mininumNumber.push('...', selected, '...', total)
                }
                setNumbers(mininumNumber)
            }
        }
        getNumbers()
    }, [selected, total])
    const setNumber = (n: string | number) => {
        if (typeof n === "number") {
            setSelected(+n)
        }
    }
    return (
        <div className={[styles.pagination, styles.container].join(" ")}>
            <span className={styles.arrow} onClick={() => { selected > 1 && setSelected(selected - 1) }}>
                <i ><FaAngleLeft /></i>
            </span>
            {numbers.map((n, index) => (
                <span className={[styles.number, n === selected && styles.selected].join(" ")} key={index} onClick={() => setNumber(n)}>
                    <a >{n}</a>
                </span>
            ))}

            <span className={styles.arrow} onClick={() => { selected < total && setSelected(selected + 1) }} >
                <i ><FaAngleRight /></i>
            </span>
        </div>
    )
}
export default Pagination