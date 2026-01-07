import styles from "./FixedAlert.module.css"

type FixedAlertProps = {
  imgSrc: string,
  imgAlt: string,
  text: string
}

export default function FixedAlert(props: Readonly<FixedAlertProps>) {
  const { imgSrc, imgAlt, text } = props
  
  return (
    <div className={styles.container}>
      <img
        src={imgSrc}
        alt={imgAlt}
        className={styles.icon}
      />
      <p>
        {text}
      </p>
    </div>
  )
}
