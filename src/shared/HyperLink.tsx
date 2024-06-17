import React from "react"

interface HyperLinkProps {
  url: string
  text: string
  newTab?: boolean
}

const HyperLink: React.FC<HyperLinkProps> = ({ url, text, newTab }) => {
  return (
    <a
      href={url}
      target={newTab ? "_blank" : "_self"}
      className="text-pink-900 hover:underline hover:text-pink-700"
    >
      {text}
    </a>
  )
}

export default HyperLink
