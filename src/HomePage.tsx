function HomePage() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="container max-w-4xl m-auto p-4">
      <h1 className="text-xl font-semibold text-center">SplenWork</h1>
      <ul>
        <li>
          <a href="https://txtpad.io">txtpad.io</a>
        </li>
        <li>
          <a href="https://splenview.com">SplenView</a>
        </li>
        <li>
          <a href="https://splenplayer.com">SplenPlayer</a>
        </li>
        <li>
          <a href="/generate-amazon-affiliate-image-link">
            Generate Amazon Affiliate Image Link
          </a>
        </li>
      </ul>
      <footer>
        <p className="fixed text-sm left-0 right-0 bottom-0 text-center p-4">
          &copy; {currentYear} SplenWork Inc. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default HomePage
