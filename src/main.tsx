import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./HomePage.tsx"
import GenAmznAffImgLinkPage from "./GenAmznAffImgLinkPage.tsx"
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/generate-amazon-affiliate-image-link",
    element: <GenAmznAffImgLinkPage />,
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
