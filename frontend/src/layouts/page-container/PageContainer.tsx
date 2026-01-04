import styles from "./PageContainer.module.css"

type PageContainerProps = {
  children: React.ReactNode
}

export default function PageContainer(props: Readonly<PageContainerProps>) {
  return (
    <main className={styles.container}>
      {props.children}
    </main>
  )
}
