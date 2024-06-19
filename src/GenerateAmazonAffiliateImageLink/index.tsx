import { Helmet } from "react-helmet-async"
import TextInput from "../shared/TextInput"

function Page() {
  return (
    <>
      <div className="container max-w-4xl m-auto">
        <h1 className="text-xl font-semibold text-center py-6">
          Generate Amazon Affiliate Image Link
        </h1>

        <div>
          <label>Text Link*</label>
          <TextInput placeholder="https://amzn.to/..." />
        </div>

        <div>
          <label>Product Image URL*</label>
          <TextInput placeholder="https://m.media-amazon.com/images/..." />
        </div>

        <div>
          <label>Title*</label>
          <TextInput placeholder="" />
        </div>

        <div>
          <label>Description</label>
          <TextInput lines={3} />
        </div>

        <div>
          <label>Price</label>
          <TextInput placeholder="" />
        </div>

        <div>
          <label>Reviews</label>
          <TextInput placeholder="" />
        </div>

        <div>
          <label>Rating</label>
          <TextInput placeholder="" />
        </div>
      </div>
      <Helmet>
        <title>Generate Amazon Affiliate Image Link - SplenWork</title>
      </Helmet>
    </>
  )
}

export default Page
