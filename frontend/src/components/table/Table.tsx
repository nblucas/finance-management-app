import TableHeader from "./table-header/TableHeader"
import TableRow from "./table-row/TableRow"
import styles from "./Table.module.css"

type DataType = {
  id: number,
  value: number,
  date: string,
  description: string,
  category: string
}

const data: DataType[] = [
  {
    id: 1,
    value: 20,
    date: "01/01/2026",
    description: "random description",
    category: "Health"
  },
  {
    id: 2,
    value: 20,
    date: "01/01/2026",
    description: "random description asd a adsad a asd asd as",
    category: "Health"
  },
  {
    id: 3,
    value: 20,
    date: "01/01/2026",
    description: "random description",
    category: "Health"
  },
  {
    id: 4,
    value: 20,
    date: "01/01/2026",
    description: "random description",
    category: "Health"
  },
  {
    id: 5,
    value: 20,
    date: "01/01/2026",
    description: "random description",
    category: "Health"
  }
]

export default function Table() {
  return (
    <>
      <div>
        
      </div>
      <div className={styles.cellsContainer}>
        <TableHeader data={["EXPENSE ID", "DESCRIPTION", "VALUE", "CATEGORY", "DATE"]}/>
        {data.map((value) => {
          return <TableRow key={value.id} data={[value.id, value.description, value.value, value.category, value.date ]} />
        })}
      </div>
    </>
  )
}
