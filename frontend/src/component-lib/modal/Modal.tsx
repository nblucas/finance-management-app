import styles from "./Modal.module.css"
import ModalBody from "./ModalBody/ModalBody"
import ModalFooter from "./ModalFooter/ModalFooter"
import ModalHeader from "./ModalHeader/ModalHeader"

type ModalProps = {
  size: "small" | "medium" | "large"
  title?: string
  body: () => React.ReactNode
  isOpen: boolean
  handleClose: () => void 
  handleConfirm: () => void
  handleCancel: () => void
}

export function Modal(props: Readonly<ModalProps>) {
  const { size, title, body, isOpen, handleClose, handleConfirm, handleCancel } = props
  
  return isOpen && (
    <div className={styles.background}>
      <div className={`${styles.container} ${styles[size]}`}>
        <ModalHeader title={title} handleClose={handleClose} />
        <ModalBody body={body} />
        <ModalFooter
          confirmLabel="Confirm"
          cancelLabel="Cancel"
          handleConfirm={handleConfirm}
          handleCancel={handleCancel}
        />
      </div>
    </div>
  )
}
