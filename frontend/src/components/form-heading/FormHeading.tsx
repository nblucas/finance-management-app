import styles from "./FormHeading.module.css"

type FormHeadingProps = {
  label: string
}

export default function FormHeading(props: Readonly<FormHeadingProps>) {
  const { label } = props
  
  return (
    <h1 className={styles.title}>{label}</h1>
  )
}
