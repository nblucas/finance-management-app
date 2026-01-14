import styles from "./Link.module.css"

type LinkProps = {
  href: string,
  iconSrc?: string,
  iconAltText?: string,
  label: string,
  size: "small" | "medium" | "large" | "adjust" 
}

export function Link(props: Readonly<LinkProps>) {
  const { href, iconSrc, iconAltText, label, size } = props 

  return (
    <a href={href} className={`${styles.link} ${styles[size]}`}>
      {iconSrc && <img src={iconSrc} alt={iconAltText} />}
      <p>{label}</p>
    </a>
  )
}
