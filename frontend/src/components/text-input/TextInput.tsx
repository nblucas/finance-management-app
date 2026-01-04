import styles from "./TextInput.module.css"
import type { ChangeEvent } from "react";

type TextInputProps = {
  label: string
  name: string
  value: string
  placeholder: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function TextInput(props: Readonly<TextInputProps>) {
  const { label, name, value, placeholder, onChange } = props 

  return (
    <div className={styles.container}>
      <label
        htmlFor={name}
        className={styles.label}
      >
        {label}
      </label>
      <input
        name={name}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
        className={styles.input}
      />
    </div>
  )
}
