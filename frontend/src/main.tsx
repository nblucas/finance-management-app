import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import "./global-styles.css"
import TestPage from './pages/test-page/TestPage.tsx'

const router = createBrowserRouter([
  {
    path: "/test",
    Component: TestPage
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
