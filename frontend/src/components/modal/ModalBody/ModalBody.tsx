import styles from "./ModalBody.module.css"

type ModalBodyProps = {
  body: () => React.ReactNode
}

export default function ModalBody(props: Readonly<ModalBodyProps>) {
  const { body } = props

  return (
    <div className={styles.container}>
      {body()}
    </div>
  )
}
