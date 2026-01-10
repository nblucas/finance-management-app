import styles from "./SearchBar.module.css"

export default function SearchBar() {
  return (
    <div>
      <input type="text" placeholder="Search" className={styles.input}/>
    </div>
  )
}
