import styles from '@/styles/homepage.module.css'
type IProps = {
    templates: ITemplate[]
}
const TemplateList = ({ templates }: IProps) => {
    return (
        <div className={[styles.templates, styles.container].join(" ")}>
            {templates.map((template) => (
                <div key={template._id} className={styles.template}>
                    <div className={styles['image-content']}>
                        <img src={template.image} />
                        <div className={styles.fade}></div>
                    </div>
                    <div className={styles["template-content"]}>
                        {`${template.title} ${template.role.toLowerCase()} dành cho ${template.category.toLowerCase()}`}
                    </div>
                </div>
            ))}
        </div>
    )
}
export default TemplateList