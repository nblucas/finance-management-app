import "./global-styles.css"
import Header from "./layouts/header/Header"
import Tab from "./components/tab/Tab"
import { entitiesTabValues } from "./models/model-entities"

function App() {
  return (
    <>
      <Header />
      <Tab tabTitles={entitiesTabValues}/>
    </>
  )
}

export default App
