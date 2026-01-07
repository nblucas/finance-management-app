import styles from "./TableRow.module.css"

type TableRowProps = {
  data: any /* todo: fix this type */
}

export default function TableRow(props: Readonly<TableRowProps>) {
  const { data } = props

  return (
    <div className={styles.container}>
      {data.map((value: any, index: any) => {
        return <div key={`${index}-${value}`} className={styles.item}>{value}</div>
      })}
    </div>
  )
}
