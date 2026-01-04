import { useState } from "react"
import styles from "./Tab.module.css"

type TabProps = { 
  tabTitles: {
    id: number,
    title: string
  }[]
}

export default function Tab(props: Readonly<TabProps>) {
  const { tabTitles } = props
  const [currentTab, setCurrentTable] = useState(tabTitles[0])

  return (
    <ul className={styles.tabContainer}>
      {tabTitles.map((value) => {
        const isTabActive = currentTab === value
        const tabActiveStyle = isTabActive ? styles.tabItemContainerActive : ""

        return (
          <li key={`${value.id}`} className={`${styles.tabItemContainer} ${tabActiveStyle}`}>
            <button className={styles.tabItem} onClick={() => {setCurrentTable(value)}}>
              {value.title}
            </button>
          </li>
        )
      })}
    </ul>
  )
}
