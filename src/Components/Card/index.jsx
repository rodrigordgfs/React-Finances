import React from 'react'

export default function Card({ title, description, color, children }) {
  return (
    <div className={`${color} flex-1 p-6 rounded shadow`}>
            <div className="flex flex-row items-center justify-between">
                <p className='font-poppins text-lg font-semibold'>{title}</p>
                {children}
            </div>
            <p className='font-poppins text-3xl pt-10'>{description}</p>
        </div>
  )
}