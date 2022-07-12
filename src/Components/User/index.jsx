import React from 'react'

export default function User({ name }) {
  return (
    <a href='#' className='flex items-center px-4 py-2 bg-zinc-800 rounded'>
        <p className='font-poppins'>{name}</p>
    </a>
  )
}
