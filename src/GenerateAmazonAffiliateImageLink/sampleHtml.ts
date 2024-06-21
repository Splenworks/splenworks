const { affilationLink, imageUrl, title } = {
  affilationLink: "https://amzn.to/44VchvH",
  imageUrl: "https://m.media-amazon.com/images/I/81UUncqngWL._SL1500_.jpg",
  title: "Akira Toriyama's Manga Theater Hardcover - December 7, 2021",
  // description:
  //   "An extensive collection of imaginative and action-packed short stories from the creator of Dragon Ball, Akira Toriyama! From Akira Toriyama, the legendary manga creator of Dragon Ball, comes this special collection of short stories spanning the first few decades of his career. Serving as both a collection of his early works and a history of his life as a manga writer and illustrator, this giant tome is packed with everything you could ever want as a fan of classic shonen manga.",
  // rating: 4.8,
  // reviews: 564,
}

export const sampleHtml = `
<div
  style="all:unset;box-sizing:border-box;cursor:pointer;display:flex;flex-direction:column;background:white"
>
  <div
    style="all:unset;box-sizing:border-box;display:flex;justify-content:center;align-items:center;"
  >
    <img
      src="${imageUrl}"
      alt="${title}"
      style="all:unset;box-sizing:border-box;min-width:10rem;max-width:14rem;max-height:10rem;object-fit:contain;"
    />
  </div>
  <div className="flex flex-col gap-2">
    <p className="font-semibold text-center md:text-left line-clamp-2 md:line-clamp-3 lg:line-clamp-2">
      ${title}
    </p>
    <div className="flex justify-center md:justify-start">
      <a
        style="font-size:14px;line-height:20px;background:rgb(234,179,8);color:black;padding:8px 12px 8px;border-radius:4px;font-stretch:condensed;white-space:nowrap;cursor:pointer;"
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
