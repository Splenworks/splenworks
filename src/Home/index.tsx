import HyperLink from "../shared/HyperLink"

function Page() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="container m-auto p-4 h-lvh flex flex-col justify-start">
      <div className="m-auto flex-auto flex flex-col justify-start">
        <div className="flex-auto">
          <h1 className="text-2xl font-semibold my-4">
            <span className="text-pink-900">Splen</span>Work
          </h1>
          <h2 className="font-semibold text-lg mt-6 mb-2">Our Products</h2>
          <ul className="list-disc pl-4">
            <li>
              <HyperLink url="https://txtpad.io" text="txtpad.io" newTab />
            </li>
            <li>
              <HyperLink url="https://splenview.com" text="SplenView" newTab />
            </li>
            <li>
              <HyperLink
                url="https://splenplayer.com"
                text="SplenPlayer"
                newTab
              />
            </li>
          </ul>
          <h2 className="font-semibold text-lg mt-6 mb-2">Tools</h2>
          <ul className="list-disc pl-4">
            <li>
              <HyperLink
                url="/generate-amazon-affiliate-image-link"
                text="Generate Amazon Affiliate Image Link"
              />
            </li>
          </ul>
        </div>
        <footer>
          <p className="text-sm left-0 right-0 bottom-0 py-4">
            &copy; {currentYear} SplenWork Inc. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  )
}

export default Page
