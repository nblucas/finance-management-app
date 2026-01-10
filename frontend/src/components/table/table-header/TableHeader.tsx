import styles from "./TableHeader.module.css"

type TableHeaderProps = {
  data: any /* todo: fix this type */
}

export default function TableHeader(props: Readonly<TableHeaderProps>) {
  const { data } = props

  return (
    <thead>
      <tr className={styles.container}>
        {data.map((value: any, index: any) => {
          return <th key={`${index}-${value}`} className={styles.item}>{value}</th>
        })}
      </tr>
    </thead>
  )
}
