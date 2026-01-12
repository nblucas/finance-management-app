import styles from "./Modal.module.css"
import ModalBody from "./ModalBody/ModalBody"
import ModalFooter from "./ModalFooter/ModalFooter"
import ModalHeader from "./ModalHeader/ModalHeader"

type ModalProps = {
  size: "small" | "medium" | "large"
  title?: string
  body: () => React.ReactNode
}

export default function Modal(props: Readonly<ModalProps>) {
  const { size, title, body } = props
  
  return (
    <div className={styles.background}>
      <div className={`${styles.container} ${styles[size]}`}>
        <ModalHeader title={title} />
        <ModalBody body={body} />
        <ModalFooter confirmLabel="Confirm" cancelLabel="Cancel"/>
      </div>
    </div>
  )
}
