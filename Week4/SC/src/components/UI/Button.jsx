"use client"

import { useNavigate } from "react-router-dom"

const Button = ({ variant = "primary", title, path, onClick }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    if (onClick) {
      onClick()
    } else if (path) {
      navigate(path)
    }
  }

  const buttonClasses = variant === "primary" ? "btn-primary" : "btn-secondary"

  return (
    <button onClick={handleClick} className={buttonClasses}>
      {title}
    </button>
  )
}

export default Button
