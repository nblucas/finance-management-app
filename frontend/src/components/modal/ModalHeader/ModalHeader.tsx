import styles from "./ModalHeader.module.css"

type ModalHeaderProps = {
  title?: string
}

export default function ModalHeader(props: Readonly<ModalHeaderProps>) {
  const { title } = props
  return (
    <div className={styles.container}>
      <p>{title}</p>
      <button>
        <img src="./src/assets/icons/close_icon.png" alt="Icon for closing the page" className={styles.icon}/>
      </button>
    </div>
  )
}
