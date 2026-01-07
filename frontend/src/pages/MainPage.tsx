import styles from "./MainPage.module.css"
import Button from "../components/button/Button"
import FixedAlert from "../components/fixed-alert/FixedAlert"
import PageContainer from "../layouts/page-container/PageContainer"
import Table from "../components/table/Table"

export default function MainPage() {
  return (
    <>
      <PageContainer>
      <div className={styles.header}>
        <FixedAlert
          imgSrc="./src/assets/icons/info_icon.png"
          imgAlt="Icon that indicates information."
          text="Register new expenses. Also, create categories so you can categorize your expenses."
        />
        <Button
          text="Create new category"
          onClick={() => console.log("New category")}
        />
        <Button
          text="Register expense"
          onClick={() => console.log("Register expenses")}
        />
      </div>
      <Table />
      </PageContainer>
    </>
  )
}
