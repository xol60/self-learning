import styles from '@/styles/homepage.module.css'
const Footer = () => {
    return (
        <footer>
            <nav className={styles["footer-title"]}>
                <div className={styles.infos}>
                    <div className={styles.info}>Tuyển dụng trực tiếp với BOSS</div>
                    <div className={styles.info}>Nhằm mục tiêu quản lý</div>
                    <div className={styles.info}>Cửa hàng trực tuyến để tuyển dụng trực tiếp</div>
                </div>
                <div className={styles.license}><span>Bản quyền @2023 Sơ yếu lý lịch tuyển dụng trực tiếp ICP Bắc Kinh số
                    14013441-5
                    Chứng chỉ ICP Bắc Kinh số 150923</span></div>
            </nav>
        </footer>
    )
}
export default Footer