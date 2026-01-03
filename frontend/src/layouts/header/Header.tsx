import styles from "./Header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navContainer}>
          <li className={styles.navItem}>
            Create entity
          </li>
          <li className={styles.navItem}>
            Register expense
          </li>
        </ul>
      </nav>
    </header>
  )
}