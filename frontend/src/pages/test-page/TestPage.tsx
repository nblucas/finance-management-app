import styles from "./TestPage.module.css"
import { Modal } from "../../design-system/modal"
import { useState } from "react"
import { Button } from "../../design-system/button"

export default function TestPage() {
  const [isModalOpen, setIsModalOpen] = useState(false) 

  return (
    <div className={styles.container}>
      <Button
        label="Open modal"
        handleClick={() => setIsModalOpen(true)}
        size="small"
        state="normal"
      />
      <Modal
        body={() => <div>Hello Modal</div>}
        size="medium"
        title="Modal title check it out"
        isOpen={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
        handleCancel={() => setIsModalOpen(false)}
        handleConfirm={() => setIsModalOpen(false)}
      />
    </div>
  )
}
