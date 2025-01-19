import HyperLink from "../shared/HyperLink"

function Page() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="container m-auto p-4 h-dvh flex flex-col justify-start">
      <div className="m-auto flex-auto flex flex-col justify-start">
        <div className="flex-auto flex flex-col">
          <h1 className="text-2xl font-semibold mt-8 mb-16 text-center">
            <span className="text-pink-900">Splen</span>works
          </h1>
          <div className="flex-auto flex items-first">
            <ul className="[&>li]:px-6 [&>li]:py-4">
              <li>
                <HyperLink
                  url="https://txtpad.io"
                  text="txtpad.io"
                  newTab
                  className=""
                />
                <p>
                  Free online text editor. Write and save your documents online
                  with the free AI feature.
                </p>
              </li>
              <li>
                <HyperLink
                  url="https://splenview.com"
                  text="SplenView"
                  newTab
                />
                <p>A simple image viewer like HoneyView but in the browser.</p>
              </li>
              <li>
                <HyperLink
                  url="https://splenplayer.com"
                  text="SplenPlayer"
                  newTab
                />
                <p>A simple video/music player that supports captions too.</p>
              </li>
              <li>
                <HyperLink url="https://log4day.com" text="log4day" disabled />
                <p>Diary app in development.</p>
              </li>
            </ul>
          </div>
        </div>
        <footer>
          <p className="text-sm py-8 text-center">
            &copy; {currentYear} Splenworks Inc. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  )
}

export default Page
