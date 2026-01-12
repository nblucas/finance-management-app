import Button from "../../button/Button"
import styles from "./ModalFooter.module.css"

type ModalFooterProps = {
  confirmLabel: string
  cancelLabel: string
}

export default function ModalFooter(props: Readonly<ModalFooterProps>) {
  const { confirmLabel, cancelLabel } = props
  
  return (
    <div className={styles.container}>
      <Button text={cancelLabel} onClick={() => console.log("Cancel")} isTransparent/>
      <Button text={confirmLabel} onClick={() => console.log("Confirm")} />
    </div>
  )
}
