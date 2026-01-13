import styles from "./Button.module.css"

type ButtonProps = {
  label: string
  size: "small" | "medium" | "large" | "adjust"
  state: "normal" | "disabled" | "loading"
}

export function Button(props: Readonly<ButtonProps>) {
  const { label, size, state } = props

  const isLoading = state === "loading"

  return (
    <button className={`${styles.button} ${styles[size]} ${styles[state]}`}>
      {isLoading ? "Loading..." : label}
    </button>
  )
}
