import HyperLink from "../shared/HyperLink"

function Page() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="container m-auto p-4 h-lvh flex flex-col justify-start">
      <div className="m-auto flex-auto flex flex-col justify-start">
        <div className="flex-auto flex flex-col">
          <h1 className="text-2xl font-semibold my-4 mb-8 text-center">
            <span className="text-pink-900">Splen</span>Works
            <span className="font-normal">&apos; Products</span>
          </h1>
          <div className="flex-auto flex items-first">
            <ul className="[&>li]:px-6 [&>li]:py-4">
              <li>
                <HyperLink url="https://txtpad.io" text="txtpad.io" newTab />
                <p>Free online text editor. Write and save your notes online</p>
              </li>
              <li>
                <HyperLink
                  url="https://splenview.com"
                  text="SplenView"
                  newTab
                />
                <p>A simple image viewer like HoneyView but in the browser</p>
              </li>
              <li>
                <HyperLink
                  url="https://splenplayer.com"
                  text="SplenPlayer"
                  newTab
                />
                <p>A simple video/music player that can handle subtitles too</p>
              </li>
            </ul>
          </div>
        </div>
        <footer>
          <p className="text-sm left-0 right-0 bottom-0 py-4 text-center">
            &copy; {currentYear} SplenWorks Inc. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  )
}

export default Page
