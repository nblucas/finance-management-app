import "./global-styles.css"
import Header from "./layouts/header/Header"
import Tab from "./components/tab/Tab"
import { entitiesTabValues } from "./models/model-entities"
import CategoryRegistrantion from "./pages/CategoryRegistration"

function App() {
  return (
    <>
      <Header />
      <Tab tabTitles={entitiesTabValues}/>
      <CategoryRegistrantion />
    </>
  )
}

export default App
