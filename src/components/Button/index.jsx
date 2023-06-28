import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Button = forwardRef(({ bgColor = 'bg-brand-color-blue-100', color = 'text-white', children, ...props}, ref) => {
  return (
    <button ref={ref} {...props} type='button' className={`p-3 my-2 w-full rounded font-bold ${bgColor} ${color}`}>{children}</button>
  )
})

Button.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
}

Button.displayName = 'Button'

export default Button
