import React from 'react'

function Button({loading,name, ...rest}) {
  return (
    <div>
        <button type='submit' {...rest}>{loading ? "Loading . . ." : <>{name}</>}</button>
    </div>
  )
}

export default Button