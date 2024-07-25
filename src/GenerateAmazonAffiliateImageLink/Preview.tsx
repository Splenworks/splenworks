import React from "react"

interface PreviewProps {
  html: string
}

const Preview: React.FC<PreviewProps> = ({ html }) => {
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

export default Preview
