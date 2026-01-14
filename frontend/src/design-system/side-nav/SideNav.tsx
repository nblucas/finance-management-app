import { Button } from "../button"
import { Link } from "../link"
import styles from "./SideNav.module.css"

type SideNavProps = {
  logoSrc: string,
  logoAltText: string,
  listItemsData: {
    id: number,
    iconSrc: string,
    iconAltText: string,
    label: string,
    to: string
  }[]
}

export function SideNav(props: Readonly<SideNavProps>) {
  const { logoSrc, logoAltText, listItemsData } = props

  return (
    <aside className={styles.mainContainer}>
      <div className={styles.logoContainer}>
        <img src={logoSrc} alt={logoAltText} className={styles.logo} />
      </div>
      <ul className={styles.list}>
        {listItemsData.map((value) => (
          <li key={value.id} className={styles.listItem}>
            <Link
              to="/test"
              label={value.label}
              size="adjust"
              contentPosition="left"
              iconSrc={value.iconSrc}
              iconAltText={value.iconAltText}
            />
          </li>
        ))}
      </ul>
      <div className={styles.buttonContainer}>
        <Button 
          label="Logout"
          size="adjust"
          state="normal"
          handleClick={() => {console.log("Logout pressed")}}
        />
      </div>
    </aside>
  )
}
