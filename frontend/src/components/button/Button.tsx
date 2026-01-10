import styles from "./Button.module.css"

type ButtonProps = {
  text: string,
  onClick: any, /* todo: fix this type - make it specific */
  imageSrc?: string,
  imageAlt?: string,
  isTransparent?: boolean
}

export default function Button(props: Readonly<ButtonProps>) {
  const { text, onClick, imageSrc, imageAlt, isTransparent } = props
  
  const transparentStyle = isTransparent ? styles.buttonTransparent : styles.buttonFilled

  return (
    <button className={`${styles.button} ${transparentStyle}`} onClick={onClick}>
      {imageSrc && <img src={imageSrc} alt={imageAlt} className={styles.icon} />}
      <p>{text}</p>
    </button>
  )
}
