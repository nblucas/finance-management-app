import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import "./global-styles.css"
import ExpensesPage from './pages/expenses-page/ExpensesPage.tsx'
import NewExpensePage from './pages/new-expense-page/NewExpensePage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component: ExpensesPage,
  }, 
  {
    path: "/register-expenses",
    Component: NewExpensePage
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
