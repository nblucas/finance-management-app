import styles from "./Modal.module.css"
import ModalHeader from "./ModalHeader/ModalHeader"

type ModalProps = {
  size: "small" | "medium" | "large"
  title?: string
}

export default function Modal(props: Readonly<ModalProps>) {
  const { size, title } = props
  
  return (
    <div className={styles.background}>
      <div className={`${styles.container} ${styles[size]}`}>
        <ModalHeader title={title} />
      </div>
    </div>
  )
}
