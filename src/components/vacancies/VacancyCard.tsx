import { Vacancy } from '@/types'
import Link from 'next/link'
import React, { FC } from 'react'

interface Props {
    vacancy: Vacancy
}

export const VacancyCard:FC<Props> = ({ vacancy }) => {
  return (
    <Link href={`/vacancies/${vacancy.id}`} className='border rounded-md p-3 hover:shadow-lg duration-200'>
        <h3 className='font-bold'>{vacancy.title}</h3>
        <span className='text-gray-500 text-sm'>{vacancy.address}</span>
        <p className='mt-2 text-sm'>{vacancy.description.substring(0,200)}...</p>
        <div className='mt-2 flex flex-row gap-2 text-sm'>
          <span className='bg-red-200 px-2 rounded-md'>{vacancy.education}</span>
          <span className='bg-red-200 px-2 rounded-md'>${vacancy.salary}</span>
        </div>
    </Link>
  )
}
