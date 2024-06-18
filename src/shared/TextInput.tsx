import React from "react"

interface TextInputProps {
  placeholder?: string
  lines?: number
}

const TextInput: React.FC<TextInputProps> = ({ placeholder, lines = 1 }) => {
  if (lines === 1) {
    return (
      <input
        type="text"
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-none focus:ring-2 focus:ring-pink-900"
        placeholder={placeholder}
      />
    )
  }
  return (
    <textarea
      className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-none focus:ring-2 focus:ring-pink-900"
      placeholder={placeholder}
      rows={lines}
    />
  )
}

export default TextInput
