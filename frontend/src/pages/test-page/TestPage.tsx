import styles from "./TestPage.module.css"
import { Button } from "../../design-system/button"

export default function TestPage() {
  return (
    <div className={styles.container}>
      <Button
        label="Confirm"
        size="medium"
        state="normal"
      />
    </div>
  )
}
