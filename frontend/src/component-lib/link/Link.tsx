import styles from "./Link.module.css"

type LinkProps = {
  to: string,
  iconSrc?: string,
  iconAltText?: string,
  label: string,
  size: "small" | "medium" | "large" | "adjust"
  contentPosition: "left" | "center"
}

export function Link(props: Readonly<LinkProps>) {
  const { to, iconSrc, iconAltText, label, size, contentPosition } = props 

  return (
    <a href={to} className={`${styles.link} ${styles[size]} ${styles[contentPosition]}`}>
      {iconSrc && <img src={iconSrc} alt={iconAltText} className={styles.icon} />}
      <p>{label}</p>
    </a>
  )
}
