import { Button } from "../../button/index"
import styles from "./ModalFooter.module.css"

type ModalFooterProps = {
  confirmLabel: string
  cancelLabel: string
  handleConfirm: () => void
  handleCancel: () => void
}

export default function ModalFooter(props: Readonly<ModalFooterProps>) {
  const { confirmLabel, cancelLabel, handleConfirm, handleCancel } = props
  
  return (
    <div className={styles.container}>
      <Button
        label={cancelLabel}
        size="small"
        state="normal"
        handleClick={handleConfirm}
      />
      <Button
        label={confirmLabel}
        size="small"
        state="normal"
        handleClick={handleCancel}
      />
    </div>
  )
}
