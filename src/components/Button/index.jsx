import React, { forwardRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const Button = forwardRef(({ variant = 1, children, ...props}, ref) => {

  const [color, setColor] = useState('text-white')
  const [bgColor, setBgColor] = useState('bg-brand-color-blue-100')

  const setColors = () => {
    switch(variant){
      case 1:
        setColor('text-white')
        setBgColor('bg-brand-color-blue-100')
        break
      case 2:
        setColor('text-brand-color-blue-100')
        setBgColor('bg-white')
        break
    }
  }

  useEffect(() => {
    setColors()
  }, [])

  return (
    <button ref={ref} {...props} type='button' className={`p-3 my-2 w-full rounded font-bold ${bgColor} ${color}`}>{children}</button>
  )
})

Button.propTypes = {
  variant: PropTypes.oneOf([1, 2])
}

Button.displayName = 'Button'

export default Button
