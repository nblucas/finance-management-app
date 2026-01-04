import styles from "./SubmitButton.module.css"

export default function SubmitButton() {
  return (
    <input type="submit" value="Submit" className={styles.button} />
  )
}
