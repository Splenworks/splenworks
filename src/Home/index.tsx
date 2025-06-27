import CloudBackground from "../shared/CloudBackground"
import HyperLink from "../shared/HyperLink"

function Page() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <CloudBackground />
      <div className="relative mx-auto max-w-5xl px-4 py-10 flex flex-col min-h-dvh">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight mt-4 mb-3">
            <span className="text-pink-700">Splen</span>works
          </h1>
          <p className="text-lg text-gray-600 italic">
            We build essential apps for the browser.
          </p>
        </header>
        <main className="flex-1 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white/70 dark:bg-neutral-800/70 backdrop-blur rounded-lg p-6 shadow-md">
            <HyperLink
              url="https://txtpad.io"
              text="txtpad.io"
              newTab
              className="text-xl font-medium"
            />
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              Free online text editor. Write and save your documents online with
              the free AI feature.
            </p>
          </div>
          <div className="bg-white/70 dark:bg-neutral-800/70 backdrop-blur rounded-lg p-6 shadow-md">
            <HyperLink
              url="https://splenview.com"
              text="SplenView"
              newTab
              className="text-xl font-medium"
            />
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              A simple image viewer like HoneyView but in the browser.
            </p>
          </div>
          <div className="bg-white/70 dark:bg-neutral-800/70 backdrop-blur rounded-lg p-6 shadow-md">
            <HyperLink
              url="https://splenplayer.com"
              text="SplenPlayer"
              newTab
              className="text-xl font-medium"
            />
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              A simple video/music player that supports captions too.
            </p>
          </div>
        </main>
        <footer className="mt-12">
          <p className="text-sm text-center text-gray-800">
            &copy; {currentYear} Splenworks Inc. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  )
}

export default Page
