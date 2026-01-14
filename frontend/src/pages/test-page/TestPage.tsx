import styles from "./TestPage.module.css"
import { SideNav } from "../../design-system/side-nav"
import { Link } from "../../design-system/link"

const listData = [
  {
    id: 0,
    iconSrc: "./src/assets/icons/filter_icon.png",
    iconAltText: "Icon that represents the action of filtering data.",
    label: "Dashboard",
    to: "/test"
  },
  {
    id: 1,
    iconSrc: "./src/assets/icons/filter_icon.png",
    iconAltText: "Icon that represents the action of filtering data.",
    label: "Dashboard",
    to: "/test"
  },
  {
    id: 2,
    iconSrc: "./src/assets/icons/filter_icon.png",
    iconAltText: "Icon that represents the action of filtering data.",
    label: "Dashboard",
    to: "/test"
  },
  {
    id: 3,
    iconSrc: "./src/assets/icons/filter_icon.png",
    iconAltText: "Icon that represents the action of filtering data.",
    label: "Dashboard",
    to: "/test"
  },
  {
    id: 4,
    iconSrc: "./src/assets/icons/filter_icon.png",
    iconAltText: "Icon that represents the action of filtering data.",
    label: "Dashboard",
    to: "/test"
  }
]

export default function TestPage() {

  return (
    <div className={styles.container}>
      <SideNav
        logoSrc="./src/assets/icons/logoipsum.png"
        logoAltText="logo"
        listItemsData={listData}
      />
    </div>
  )
}
