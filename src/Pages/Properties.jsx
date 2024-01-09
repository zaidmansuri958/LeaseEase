import React from 'react'
import { Link } from 'react-router-dom'

export const Properties = () => {
  return (
    <div>
    <Link  to='/agreement'>
    <button>Generate agreement</button>
    </Link>
    <Link  to='/add-properties'>
    <button>Add Properties</button>
    </Link>
    </div>
  )
}
