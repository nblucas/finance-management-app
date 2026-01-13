import styles from "./ExpensesPage.module.css"
import Button from "../../components/button/Button"
import FixedAlert from "../../components/fixed-alert/FixedAlert"
import PageContainer from "../../layouts/page-container/PageContainer"
import Table from "../../components/table/Table"
import { NavLink } from "react-router"

export default function ExpensesPage() {
  return (
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
        <NavLink to="/register-expenses">
          <Button
            text="Register expense"
            onClick={() => console.log("Register expenses")}
          />
        </NavLink>
      </div>
      <Table />
    </PageContainer>
  )
}
