type GenerateHtmlArgs = {
  width: number
  height: number
  textLink: string
  imageUrl: string
  title: string
}

export const generateHtml = ({
  width,
  height,
  textLink,
  imageUrl,
  title,
}: GenerateHtmlArgs) => {
  return `
<div
  style="all:unset;box-sizing:border-box;cursor:pointer;display:flex;flex-direction:column;background:white;width:${width}px;height:${height}px;border-radius:8px;box-shadow:0 0 8px rgba(0,0,0,0.1);overflow:hidden;"
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
        href="${textLink}"
        target="_blank"
        rel="noreferrer noopener nofollow sponsored"
      >
        Shop on Amazon
      </a>
    </div>
  </div>
</div>
`
}
