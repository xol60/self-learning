import styles from '@/styles/homepage.module.css'
import logo from '@/public/logo.png'
type IProps = {
    jobs: IJob[]
}
const JobList = ({ jobs }: IProps) => {
    return (
        <div className={styles["job-container"]}>
            <div className={styles["main-logo"]}>
                <img src={logo.src} />
                <div className={styles.info}>
                    <span>Những vị trí đáng tin cậy đang chờ bạn lựa chọn</span>
                </div>
            </div>
            <div className={[styles.templates, styles.container].join(" ")}>
                {jobs.map((job) => (
                    <div key={job._id} className={[styles.template, styles.position].join(" ")}>
                        <div className={styles.info}>
                            <div className={styles.logo}>
                                <img src={job.logo} />
                            </div>
                            <div className={styles["sub-info"]}>
                                <div className={styles.title}>
                                    {job.title}
                                </div>
                                <div className={styles.domain}>{job.domain}</div>
                            </div>
                        </div>
                        <div className={styles.more}>
                            Xem vị trí việc làm hot
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles["more-button"]}>
                <button>Xem thêm doanh nghiệp</button>
            </div>
        </div>
    )
}
export default JobList