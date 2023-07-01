import PropTypes from 'prop-types'
import EyeIcon from "../icons/EyeIcon"
import { forwardRef, useState, useRef, useEffect } from 'react'
import React from 'react'

const InputGroup = forwardRef(({ labelText, helperText, ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false)

  console.log(helperText)

  const handleSetShowPassword = () => {
    setShowPassword((state) => !state)
  }

  return (
    <div className="container w-full">
      {labelText && (
        <label htmlFor={labelText.replace(" ", "-").toLowerCase()} className="me-2 font-bold">
          {labelText}
        </label>
      )}
        <div className='flex items-center flex-row-reverse'>
          <input type={showPassword ? 'text' : props.type} ref={ref} className='p-3 my-2 w-full rounded border border-gray-400 border-solid' placeholder={labelText} {...props} />
          {props.type == "password" && (
            <EyeIcon handleclick={handleSetShowPassword}/>
          )}
        </div>

      {!!helperText && <span className="text-brand-color-red">{helperText}</span>}
    </div>
  )
})

InputGroup.propTypes = {
  labelText: PropTypes.string.isRequired,
  helperText: PropTypes.string
}

InputGroup.displayName = 'InputGroup'

export default InputGroup
