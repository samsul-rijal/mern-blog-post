import React from 'react'

function Input({label, ...rest}) {
  return (
    <div>
        <label className='form-label'>{label}</label>
        <input className='form-control' {...rest} />
    </div>
  )
}

export default Input