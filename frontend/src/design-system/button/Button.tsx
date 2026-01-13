import styles from "./Button.module.css"

type ButtonProps = {
  label: string
  size: "small" | "medium" | "large" | "adjust"
  state: "normal" | "disabled" | "loading"
  handleClick: () => void
}

export function Button(props: Readonly<ButtonProps>) {
  const { label, size, state, handleClick } = props

  const isLoading = state === "loading"

  return (
    <button
      onClick={handleClick}
      className={`${styles.button} ${styles[size]} ${styles[state]}`}
    >
      {isLoading ? "Loading..." : label}
    </button>
  )
}
