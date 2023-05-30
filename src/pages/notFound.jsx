import styles from "../styles/code.module.scss";

const NotFound = () => {
    return (
        <main className={styles.container}>
            <h1 className={styles.code}>
                404
            </h1>

            <p className={styles.content}>
                oops! this site doesn't exist
            </p>

            <a className={styles.backButton} href={"/"}>
                back to main site
            </a>
        </main>
    );
}

export default NotFound;
