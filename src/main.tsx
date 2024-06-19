import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./Home/index.tsx"
import GenAmznAffImgLinkPage from "./GenerateAmazonAffiliateImageLink/index.tsx"
import { HelmetProvider } from "react-helmet-async"
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
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
)
