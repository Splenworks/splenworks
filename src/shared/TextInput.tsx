import React from "react"

interface TextInputProps {
  placeholder?: string
}

const TextInput: React.FC<TextInputProps> = ({ placeholder }) => {
  return (
    <input
      type="text"
      className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-none focus:ring-2 focus:ring-pink-900"
      placeholder={placeholder}
    />
  )
}

export default TextInput
