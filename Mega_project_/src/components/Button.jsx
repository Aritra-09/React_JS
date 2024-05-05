import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-indigo-600',
    textColor = 'text-white',
    className = '',
    ...props
}) {
  return (
    <button type={type} className= {`px-5 py-2 rounded-full ${bgColor} ${textColor} ${className}`} {...props}>{children}</button>
  )
}

export default Button
