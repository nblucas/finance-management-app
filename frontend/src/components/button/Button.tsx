import styles from "./Button.module.css"

type ButtonProps = {
  text: string,
  onClick: any, /* todo: fix this type - make it specific */
}

export default function Button(props: Readonly<ButtonProps>) {
  const { text, onClick } = props
  
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  )
}
