import { useState, type FormEvent } from "react"
import styles from "./CategoryRegistrationForm.module.css"
import TextInput from "../../components/text-input/TextInput"
import SubmitButton from "../../components/submit-button/SubmitButton"

export default function CategoryRegistrationForm() {
  const [data, setData] = useState({
    name: "",
    category: "",
    subcategory: "",
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log("Form data: ", data)
  }
  
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <TextInput
        label="Name"
        name="name"
        value={data.name}
        placeholder="Product's name"
        onChange={(e) => setData((prev) => ({...prev, name: e.target.value}))}
      />
      <TextInput
        label="Category"
        name="category"
        value={data.category}
        placeholder="Product's category"
        onChange={(e) => setData((prev) => ({...prev, category: e.target.value}))}
      />
      <TextInput
        label="Subcategory"
        name="subcategory"
        value={data.subcategory}
        placeholder="Product's subcategory"
        onChange={(e) => setData((prev) => ({...prev, subcategory: e.target.value}))}
      />
      <SubmitButton />
    </form>
  )
}
