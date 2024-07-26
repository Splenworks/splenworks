import React from "react"
import { twMerge } from "tailwind-merge"

interface HyperLinkProps {
  url: string
  text: string
  newTab?: boolean
  disabled?: boolean
  className?: string
}

const HyperLink: React.FC<HyperLinkProps> = ({
  url,
  text,
  newTab,
  disabled,
  className,
}) => {
  return (
    <a
      href={url}
      target={newTab ? "_blank" : "_self"}
      className={twMerge(
        "text-pink-800 hover:underline hover:text-pink-600 focus-within:outline-pink-600",
        disabled && "cursor-default hover:no-underline hover:text-pink-800",
        className,
      )}
      onClick={(e) => {
        if (disabled) {
          e.preventDefault()
        }
      }}
    >
      {text}
    </a>
  )
}

export default HyperLink
