import styles from './footer.module.css'

const Footer = ({ paragrafo }) => {
    return (
        <>
            <header className={styles.footer}>
                <p className={styles.paragrafo}>{paragrafo}</p>
            </header>
        </>
    )
}

export default Footer