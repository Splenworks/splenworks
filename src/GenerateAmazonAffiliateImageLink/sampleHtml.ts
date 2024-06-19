const { affilationLink, imageUrl, title, description, rating, reviews } = {
  affilationLink: "https://amzn.to/44VchvH",
  imageUrl: "https://m.media-amazon.com/images/I/81UUncqngWL._SL1500_.jpg",
  title: "Akira Toriyama's Manga Theater Hardcover - December 7, 2021",
  description:
    "An extensive collection of imaginative and action-packed short stories from the creator of Dragon Ball, Akira Toriyama! From Akira Toriyama, the legendary manga creator of Dragon Ball, comes this special collection of short stories spanning the first few decades of his career. Serving as both a collection of his early works and a history of his life as a manga writer and illustrator, this giant tome is packed with everything you could ever want as a fan of classic shonen manga.",
  rating: 4.8,
  reviews: 564,
}

export const sampleHtml = `
<div
  className="py-5 px-8 md:px-5 gap-3 md:flex-row md:gap-6"
  style="all:unset;box-sizing:border-box;cursor:pointer;display:flex;flex-direction:column;background:white"
  onClick={() => window.open(adItem.url, "_blank")}
>
  <div
    className="flex items-center justify-center"
    style="all:unset;box-sizing:border-box;display:flex;justify-content:center;align-items:center;"
  >
    <img
      src="${imageUrl}"
      alt="${title}"
      className="min-w-40 max-w-56 max-h-40 md:max-h-56 object-contain"
    />
  </div>
  <div className="flex flex-col gap-2">
    <p className="font-semibold text-center md:text-left line-clamp-2 md:line-clamp-3 lg:line-clamp-2">
      ${title}
    </p>
    <div className="flex justify-center md:justify-start items-center gap-1 text-sm font-semibold text-gray-500">
      <div className="flex items-center">
        <AmazonStars rating="${rating}" />
      </div>
      <span>{adItem.stars.toFixed(1)}</span>
      <span className="md:hidden lg:block">
        ({toCommaSeparatedString(${reviews})} ratings)
      </span>
    </div>
    <p className="mt-2 mb-3 line-clamp-4 text-gray-500 text-sm leading-5">
      ${description}
    </p>
    <div className="flex justify-center md:justify-start">
      <a
        className="text-sm bg-yellow-500 text-black px-3 py-2 rounded transition-colors duration-300 ease-in-out mb-1 whitespace-nowrap"
        style={{ fontStretch: "condensed" }}
        href="${affilationLink}"
        target="_blank"
        rel="noreferrer noopener nofollow sponsored"
      >
        Shop on Amazon
      </a>
    </div>
  </div>
</div>
`
