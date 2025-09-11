import styles from './Footer.module.css'

const Header = ({ autor }) => {
  return (
    <>
      <footer className={styles.footer}>
        <p className={styles.autor}>{autor}</p>
      </footer>
    </>
  );
};

export default Header;
