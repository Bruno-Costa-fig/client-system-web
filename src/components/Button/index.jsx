import PropTypes from 'prop-types'
import { forwardRef } from 'react'
import React from 'react'

const Button = forwardRef(({ bgColor = 'brand-color-blue-100', color = 'white', children, ...props }, ref) => {
  return (
    <button ref={ref} className={`p-3 my-2 w-full rounded font-bold bg-${bgColor} text-${color}`} {...props}>{children}</button>
  )
})

Button.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
}

Button.displayName = 'Button'

export default Button
