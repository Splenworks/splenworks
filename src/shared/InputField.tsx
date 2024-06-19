import React from "react"

interface InputFieldProps {
  placeholder?: string
  lines?: number
  label?: string
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  lines = 1,
  label,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm">{label}</label>
      {lines === 1 ? (
        <input
          type="text"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-none focus:ring-2 focus:ring-pink-900"
          placeholder={placeholder}
        />
      ) : (
        <textarea
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-none focus:ring-2 focus:ring-pink-900"
          placeholder={placeholder}
          rows={lines}
        />
      )}
    </div>
  )
}

export default InputField
