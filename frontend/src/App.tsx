import "./global-styles.css"
import Header from "./layouts/header/Header"
import Tab from "./components/tab/Tab"
import { entitiesTabValues } from "./models/model-entities"
import ProductRegistration from "./pages/ProductRegistration"

function App() {
  return (
    <>
      <Header />
      <Tab tabTitles={entitiesTabValues}/>
      <ProductRegistration />
    </>
  )
}

export default App
