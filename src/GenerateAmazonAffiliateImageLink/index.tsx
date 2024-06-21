import { Helmet } from "react-helmet-async"
import InputField from "../shared/InputField"
import Preview from "./Preview"
import { generateHtml } from "./generateHtml"

function Page() {
  const width = 240
  const height = 320
  return (
    <>
      <div className="container max-w-4xl m-auto">
        <h1 className="text-xl font-semibold text-center py-6">
          Generate Amazon Affiliate Image Link
        </h1>
        <div className="px-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            placeholder="https://amzn.to/..."
            label="Affiliation Link*"
          />
          <InputField
            placeholder="https://m.media-amazon.com/images/..."
            label="Product Image URL*"
          />
          <InputField placeholder="Product Title" label="Product Title*" />
          <InputField lines={3} label="Description" />
          <InputField placeholder="" label="Price" />
          <InputField placeholder="" label="Reviews" />
          <InputField placeholder="" label="Rating" />
        </div>
        <div className="border border-black p-4 w-60 h-80">
          <Preview
            html={generateHtml({
              width,
              height,
              textLink: "https://amzn.to/44VchvH",
              imageUrl:
                "https://m.media-amazon.com/images/I/81UUncqngWL._SL1500_.jpg",
              title:
                "Akira Toriyama's Manga Theater Hardcover - December 7, 2021",
            })}
          />
        </div>
      </div>
      <Helmet>
        <title>Generate Amazon Affiliate Image Link - SplenWork</title>
      </Helmet>
    </>
  )
}

export default Page
